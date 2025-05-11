"use client";
import { useEffect, useState } from "react";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import { Controller, useForm } from "react-hook-form";
import { ICreateUser } from "@/types/user/userType";
import {
  CUSTOMER_TYPE,
  MESSAGE,
  USER_ROLE,
} from "@/constants/confix-value.constant";
import {
  Autocomplete,
  Button,
  Card,
  FormControl,
  FormHelperText,
  Grid,
  TextField,
} from "@mui/material";
import {
  getDistrictByProvince,
  getPostalCodeBySubDistrict,
  getProvinceAll,
  getSubDistrictByDistrict,
} from "thai-address-universal";
import useUserRegister from "@/hooks/user/useUserRegister";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

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

const RegisterB2CPage = ({ onSuccess = () => {}, onError = () => {} }) => {
  const router = useRouter();
  const provincesAll = useProvinces();
  const [filteredDistricts, setFilteredDistricts] = useState<string[]>([]);
  const [filteredSubDistricts, setFilteredSubDistricts] = useState<string[]>(
    []
  );
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
    if (value) {
      searchDistricts(value);
      setValue("district", "");
      setValue("sub_district", "");
      setFilteredSubDistricts([]);
      setValue("postal_code", "");
    }
  };
  const handleDistrictChange = (value: string | null) => {
    if (value) {
      searchSubDistricts(value);
      setValue("sub_district", "");
      setValue("postal_code", "");
    }
  };

  const handleSubDistrictChange = (value: string | null) => {
    if (value) {
      searchPostalCode(value);
    }
  };
  const { mutateAsync: carateApi, isError: createError } = useUserRegister();

  const clientForm = useForm<ICreateUser>({
    defaultValues: {
      role_id: USER_ROLE.CUSTOMER.ROLE_ID,
      customer_type_id: CUSTOMER_TYPE.B2C.TYPE_ID,
    },
  });
  const { control, handleSubmit, setValue, watch } = clientForm;
  const handleClickSave = async (data: ICreateUser) => {
    await toast.promise(
      carateApi(data).then((data) => {
        if (data.status) {
          router.push("/login");
        }
        return data;
      }),
      {
        pending: MESSAGE.SAVING,
        success: MESSAGE.SAVED_SUCCESS,
        error: {
          render(err: any) {
            return err.data.response.data?.message || MESSAGE.SAVE_FAILED;
          },
        },
      }
    );
  };
  return (
    <>
      <Breadcrumb title={"Register Page"} />
      <section className="gi-register padding-tb-40">
        <div className="container">
          <div className="section-title-2">
            <h2 className="gi-title">
              สมัครเข้าใช้งานลูกค้าทั่วไป<span></span>
            </h2>
          </div>
          <form onSubmit={(e) => e.preventDefault()}>
            <Card
              variant="outlined"
              sx={{ padding: 2, backgroundColor: "#0000" }}
            >
              <Grid container spacing={2}>
                <Grid display="flex" size={{ xs: 12, md: 6 }}>
                  <Controller
                    control={control}
                    rules={{ required: "กรุณากรอก ชื่อ" }}
                    name="first_name"
                    render={({ field, fieldState }) => {
                      return (
                        <FormControl fullWidth>
                          <TextField
                            fullWidth
                            required
                            color="success"
                            label="ชื่อ"
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
                    rules={{ required: "กรุณากรอก นามสกุล" }}
                    name="last_name"
                    render={({ field, fieldState }) => {
                      return (
                        <FormControl fullWidth>
                          <TextField
                            fullWidth
                            required
                            type="text"
                            color="success"
                            label="นามสกุล"
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
                    rules={{ required: "กรุณากรอก อีเมล" }}
                    name="email"
                    render={({ field, fieldState }) => {
                      return (
                        <FormControl fullWidth>
                          <TextField
                            fullWidth
                            required
                            type="email"
                            color="success"
                            label="อีเมล"
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
                    name="phone"
                    render={({ field, fieldState }) => {
                      return (
                        <FormControl fullWidth>
                          <TextField
                            fullWidth
                            required
                            type="text"
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
                <Grid display="flex" size={{ xs: 12, md: 6 }}>
                  <Controller
                    control={control}
                    name="password"
                    rules={{
                      required: "กรุณากรอก รหัสผ่าน",
                      minLength: {
                        value: 8,
                        message: "รหัสผ่านต้องมีอย่างน้อย 8 ตัวอักษร",
                      },
                    }}
                    render={({ field, fieldState }) => {
                      return (
                        <FormControl fullWidth>
                          <TextField
                            fullWidth
                            required
                            type="password"
                            color="success"
                            label="รหัสผ่าน"
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
                    name="confirmPassword"
                    rules={{
                      required: "กรุณากรอก ยืนยันรหัสผ่าน",
                      validate: (value) =>
                        value === watch("password") || "รหัสผ่านไม่ตรงกัน",
                    }}
                    render={({ field, fieldState }) => {
                      return (
                        <FormControl fullWidth>
                          <TextField
                            fullWidth
                            required
                            type="password"
                            color="success"
                            label="ยืนยันรหัสผ่าน"
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
                <Grid
                  size={{ xs: 12, md: 12 }}
                  display="flex"
                  justifyContent="flex-end"
                >
                  <Button
                    variant="contained"
                    color="success"
                    onClick={(e) => {
                      handleSubmit(handleClickSave, (e) => {
                        console.log(e);
                      })(e);
                    }}
                    type="submit"
                  >
                    สมัครเข้าใช้งาน
                  </Button>
                </Grid>
              </Grid>
            </Card>
          </form>
        </div>
      </section>
    </>
  );
};

export default RegisterB2CPage;
