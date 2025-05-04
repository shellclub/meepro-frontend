"use client";

// React Imports
import { useEffect, useState } from "react";

// MUI Imports

import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import {
  Autocomplete,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Grid,
  IconButton,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { Controller, useFieldArray, useForm } from "react-hook-form";

import DialogCloseButton from "@/components/dialog/DialogCloseButton";

import { toast } from "react-toastify";
import { ICreateUserAddress } from "@/types/user/userType";
import { CommonHelper } from "@/helper/common-helper";
import {
  getProvinceAll,
  getDistrictByProvince,
  getPostalCodeBySubDistrict,
  getSubDistrictByDistrict,
} from "thai-address-universal";
import useCreateAddress from "@/hooks/user/address/useCreateAddress";
import { FORM_TYPE, MESSAGE } from "@/constants/confix-value.constant";
import { IApiResponse } from "@/types/common";
import useUpdateAddressById from "@/hooks/user/address/useUpdateAddressById";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  refetch?: any;
  type: string;
  id: string | undefined | null;
  modalData: ICreateUserAddress;
};

const useProvinces = () => {
  const [provinces, setProvinces] = useState<string[]>([]);

  useEffect(() => {
    const fetchProvinces = async () => {
      try {
        const data = await getProvinceAll();
        setProvinces(data);
      } catch (error) {
        console.error("Failed to fetch provinces:", error);
      }
    };
    fetchProvinces();
  }, []);

  return provinces;
};
const FormAddressDialog = ({
  open,
  setOpen,
  refetch,
  type,
  id,
  modalData,
}: Props) => {
  const clientForm = useForm<ICreateUserAddress>({
    defaultValues: {
      address_type: "SHOPPING",
    },
  });

  const {
    clearErrors,
    control,
    register,
    handleSubmit,
    getValues,
    setValue,
    setError,
    reset: resetForm,
    formState: { errors, isSubmitting },
    watch,
  } = clientForm;

  const handleClose = () => {
    resetForm();
    setOpen(false);
    refetch();
  };
  const provincesAll = useProvinces();
  const [queryProvince, setQueryProvince] = useState<string>("");
  const [queryDistrict, setQueryDistrict] = useState<string>("");
  const [querySubDistrict, setQuerySubDistrict] = useState<string>("");

  const filteredProvinces = CommonHelper.filterItems(
    provincesAll,
    queryProvince
  );
  const [filteredDistricts, setFilteredDistricts] = useState<string[]>([]);
  const [filteredSubDistricts, setFilteredSubDistricts] = useState<string[]>(
    []
  );

  useEffect(() => {
    if (modalData) {
      clientForm.reset(modalData);
      searchDistricts(modalData.province!!);
      searchSubDistricts(modalData.district!!);
      searchPostalCode(modalData.sub_district!!);
    }
  }, [modalData, clientForm]);

  const searchDistricts = async (province: string) => {
    const districts = await getDistrictByProvince(province);
    setFilteredDistricts(districts);
  };

  const searchPostalCode = async (province: string) => {
    const postalCode = await getPostalCodeBySubDistrict(province);
    setValue("postal_code", postalCode[0]);
  };

  const searchSubDistricts = async (district: string) => {
    const subDistricts = await getSubDistrictByDistrict(district); // Assuming this function exists
    setFilteredSubDistricts(subDistricts);
  };
  const handleProvinceChange = (value: string | null) => {
    setQueryProvince(value || "");
    if (value) {
      searchDistricts(value);
      setValue("district", "");
      setValue("sub_district", "");
      setFilteredSubDistricts([]);
      setValue("postal_code", "");
    }
  };
  const handleDistrictChange = (value: string | null) => {
    setQueryDistrict(value || "");
    if (value) {
      searchSubDistricts(value);
      setValue("sub_district", "");
      setValue("postal_code", "");
    }
  };

  const handleSubDistrictChange = (value: string | null) => {
    setQuerySubDistrict(value || "");
    if (value) {
      searchPostalCode(value);
    }
  };

  const { mutateAsync: carateApi, isError: createError } = useCreateAddress();
  const { mutateAsync: updateApi, isError: updateError } =
    useUpdateAddressById();
  const handleClickSave = async (data: ICreateUserAddress) => {
    if (type === FORM_TYPE.CREATE) {
      await toast.promise(carateApi(data).then(handleResponse), {
        pending: MESSAGE.SAVING,
        success: MESSAGE.SAVED_SUCCESS,
        error: MESSAGE.SAVE_FAILED,
      });
    } else if (type === FORM_TYPE.UPDATE) {
      await toast.promise(
        updateApi({ id: id!!, newPayload: data }).then(handleResponse),
        {
          pending: MESSAGE.UPDATING,
          success: MESSAGE.UPDATED_SUCCESS,
          error: MESSAGE.UPDATE_FAILED,
        }
      );
    }
  };
  const handleResponse = async (res: IApiResponse) => {
    if (res.status) {
      handleClose();
    } else {
      throw new Error(res.message);
    }
  };

  return (
    <Dialog
      fullWidth
      open={open}
      onClose={handleClose}
      maxWidth="lg"
      scroll="body"
      sx={{ "& .MuiDialog-paper": { overflow: "visible" } }}
    >
      <DialogCloseButton onClick={handleClose} disableRipple>
        <i className="tabler-x" />
      </DialogCloseButton>
      <DialogTitle
        variant="h5"
        className="flex gap-2 flex-col text-center sm:pbs-16 sm:pbe-6 sm:pli-16"
      >
        จัดการที่อยู่
      </DialogTitle>
      <form onSubmit={(e) => e.preventDefault()}>
        <DialogContent className="overflow-visible pbs-0 sm:pli-16">
          <Grid container spacing={2}>
            <Grid display="flex" size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                rules={{ required: "กรุณากรอก ชื่อผู้รับ" }}
                name="recipient_name"
                render={({ field, fieldState }) => {
                  return (
                    <FormControl fullWidth>
                      <TextField
                        fullWidth
                        required
                        multiline
                        color="success"
                        label="ชื่อผู้รับ"
                        value={field.value || ""}
                        onChange={(e) => field.onChange(e.target.value)}
                      />
                      {fieldState.invalid && (
                        <FormHelperText error>
                          {fieldState.error?.message}
                        </FormHelperText>
                      )}
                    </FormControl>
                  );
                }}
              />
            </Grid>
            <Grid display="flex" size={{ xs: 12, md: 6 }}>
              <Controller
                control={control}
                rules={{ required: "กรุณากรอก เบอร์โทร" }}
                name="recipient_phone"
                render={({ field, fieldState }) => {
                  return (
                    <FormControl fullWidth>
                      <TextField
                        fullWidth
                        required
                        // type=""
                        color="success"
                        label="เบอร์โทร"
                        value={field.value || ""}
                        onChange={(e) => field.onChange(e.target.value)}
                      />
                      {fieldState.invalid && (
                        <FormHelperText error>
                          {fieldState.error?.message}
                        </FormHelperText>
                      )}
                    </FormControl>
                  );
                }}
              />
            </Grid>
            <Grid display="flex" size={{ xs: 12, md: 12 }}>
              <Controller
                control={control}
                rules={{ required: "กรุณากรอก ทีอยู่" }}
                name="address"
                render={({ field, fieldState }) => {
                  return (
                    <FormControl fullWidth>
                      <TextField
                        fullWidth
                        required
                        // type=""
                        multiline
                        color="success"
                        label="ทีอยู่"
                        value={field.value || ""}
                        onChange={(e) => field.onChange(e.target.value)}
                      />
                      {fieldState.invalid && (
                        <FormHelperText error>
                          {fieldState.error?.message}
                        </FormHelperText>
                      )}
                    </FormControl>
                  );
                }}
              />
            </Grid>
            <Grid display="flex" size={{ xs: 12, md: 3 }}>
              <Controller
                name="province"
                control={control}
                rules={{ required: "กรุณากรอกข้อมูล" }}
                render={({ field, fieldState }) => {
                  const selectedOption =
                    provincesAll?.find(
                      (option: string) => option === field.value
                    ) || null;
                  return (
                    <FormControl fullWidth>
                      <Autocomplete
                        fullWidth
                        options={provincesAll!!}
                        getOptionLabel={(option: string) => option}
                        onChange={(e, value) => {
                          if (value) {
                            field.onChange(value);
                            handleProvinceChange(value);
                          }
                        }}
                        value={selectedOption}
                        id="autocomplete-outlined"
                        renderOption={(props, option) => {
                          return (
                            <li {...props} key={option}>
                              {option}
                            </li>
                          );
                        }}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            color="success"
                            label="จังหวัด"
                            required
                          />
                        )}
                      />
                      {fieldState.invalid && (
                        <FormHelperText error>
                          {fieldState.error?.message}
                        </FormHelperText>
                      )}
                    </FormControl>
                  );
                }}
              />
            </Grid>
            <Grid display="flex" size={{ xs: 12, md: 3 }}>
              <Controller
                name="district"
                control={control}
                rules={{ required: "กรุณากรอกข้อมูล" }}
                render={({ field, fieldState }) => {
                  const selectedOption =
                    filteredDistricts?.find(
                      (option: string) => option == field.value
                    ) || null;
                  return (
                    <FormControl fullWidth>
                      <Autocomplete
                        fullWidth
                        options={filteredDistricts!!}
                        getOptionLabel={(option: string) => option}
                        onChange={(e, value) => {
                          if (value) {
                            field.onChange(value);
                            handleDistrictChange(value);
                          }
                        }}
                        value={selectedOption}
                        id="autocomplete-outlined"
                        renderOption={(props, option) => {
                          return (
                            <li {...props} key={option}>
                              {option}
                            </li>
                          );
                        }}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            color="success"
                            label="อำเภอ"
                            required
                          />
                        )}
                      />
                      {fieldState.invalid && (
                        <FormHelperText error>
                          {fieldState.error?.message}
                        </FormHelperText>
                      )}
                    </FormControl>
                  );
                }}
              />
            </Grid>
            <Grid display="flex" size={{ xs: 12, md: 3 }}>
              <Controller
                name="sub_district"
                control={control}
                rules={{ required: "กรุณากรอกข้อมูล" }}
                render={({ field, fieldState }) => {
                  const selectedOption =
                    filteredSubDistricts?.find(
                      (option: string) => option === field.value
                    ) || null;
                  return (
                    <FormControl fullWidth>
                      <Autocomplete
                        fullWidth
                        options={filteredSubDistricts!!}
                        getOptionLabel={(option: string) => option}
                        onChange={(e, value) => {
                          if (value) {
                            field.onChange(value);
                            handleSubDistrictChange(value);
                          }
                        }}
                        value={selectedOption}
                        id="autocomplete-outlined"
                        renderOption={(props, option) => {
                          return (
                            <li {...props} key={option}>
                              {option}
                            </li>
                          );
                        }}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            color="success"
                            label="ตำบล"
                            required
                          />
                        )}
                      />
                      {fieldState.invalid && (
                        <FormHelperText error>
                          {fieldState.error?.message}
                        </FormHelperText>
                      )}
                    </FormControl>
                  );
                }}
              />
            </Grid>
            <Grid display="flex" size={{ xs: 12, md: 3 }}>
              <Controller
                control={control}
                rules={{ required: "กรุณากรอก รหัสไปรษณีย์" }}
                name="postal_code"
                render={({ field, fieldState }) => {
                  return (
                    <FormControl fullWidth>
                      <TextField
                        fullWidth
                        required
                        // type=""
                        multiline
                        color="success"
                        label="รหัสไปรษณีย์"
                        value={field.value || ""}
                        onChange={(e) => field.onChange(e.target.value)}
                      />
                      {fieldState.invalid && (
                        <FormHelperText error>
                          {fieldState.error?.message}
                        </FormHelperText>
                      )}
                    </FormControl>
                  );
                }}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions className="justify-center pbs-0 sm:pbe-16 sm:pli-16">
          <Button
            variant="contained"
            color="success"
            onClick={(e) => {
              handleSubmit(handleClickSave, (e) => {})(e);
            }}
            type="submit"
          >
            บันทึกข้อมูล
          </Button>
          <Button
            variant="outlined"
            color="error"
            type="reset"
            onClick={handleClose}
          >
            ยกเลิก
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default FormAddressDialog;
