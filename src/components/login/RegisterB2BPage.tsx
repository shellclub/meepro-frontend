"use client";
import { useEffect, useState } from "react";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { ICreateUserB2B } from "@/types/user/userType";
import {
  CUSTOMER_TYPE,
  MESSAGE,
  USER_ROLE,
} from "@/constants/confix-value.constant";
import {
  Autocomplete,
  Button,
  Card,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  TextField,
  Typography,
  CardHeader,
} from "@mui/material";
import {
  getDistrictByProvince,
  getPostalCodeBySubDistrict,
  getProvinceAll,
  getSubDistrictByDistrict,
} from "thai-address-universal";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

import DropzoneUploadSingle from "../form/DropzoneUploadSingle";
import useUserRegisterB2B from "@/hooks/user/useUserRegisterB2B";

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

const RegisterB2BPage = ({ onSuccess = () => {}, onError = () => {} }) => {
  const router = useRouter();
  const provincesAll = useProvinces();
  const [districtsByIndex, setDistrictsByIndex] = useState<
    Record<number, string[]>
  >({});
  const [subDistrictsByIndex, setSubDistrictsByIndex] = useState<
    Record<number, string[]>
  >({});

  const handleProvinceChange = async (value: string | null, index: number) => {
    if (value) {
      const districts = await getDistrictByProvince(value);
      setDistrictsByIndex((prev) => ({
        ...prev,
        [index]: districts,
      }));

      setSubDistrictsByIndex((prev) => ({
        ...prev,
        [index]: [],
      }));
      setValue(`address.${index}.district`, "");
      setValue(`address.${index}.sub_district`, "");
      setValue(`address.${index}.postal_code`, "");
    }
  };
  const handleDistrictChange = async (value: string | null, index: number) => {
    if (value) {
      const subDistricts = await getSubDistrictByDistrict(value);
      setSubDistrictsByIndex((prev) => ({
        ...prev,
        [index]: subDistricts,
      }));
      setValue(`address.${index}.sub_district`, "");
      setValue(`address.${index}.postal_code`, "");
    }
  };
  const handleSubDistrictChange = async (
    value: string | null,
    index: number
  ) => {
    if (value) {
      const postalCode = await getPostalCodeBySubDistrict(value);
      setValue(`address.${index}.postal_code`, postalCode[0]);
    }
  };
  const { mutateAsync: carateApi, isError: createError } = useUserRegisterB2B();

  const clientForm = useForm<ICreateUserB2B>({
    defaultValues: {
      role_id: USER_ROLE.CUSTOMER.ROLE_ID,
      customer_type_id: CUSTOMER_TYPE.B2B.TYPE_ID,
      address: [
        {
          province: "",
          district: "",
          sub_district: "",
          postal_code: "",
          address: "",
        },
      ],
      attachment: [
        {
          description: "",
          file: undefined,
        },
      ],
    },
  });

  const { control, handleSubmit, setValue, watch } = clientForm;
  const {
    fields: addressFields,
    append: addressAppend,
    remove: addressRemove,
  } = useFieldArray({
    control,
    name: "address",
  });
  const {
    fields: attachmentFields,
    append: attachmentAppend,
    remove: attachmentRemove,
  } = useFieldArray({
    control,
    name: "attachment",
  });
  const handleClickSave = async (data: ICreateUserB2B) => {
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
  const addressValues = watch("address");
  return (
    <>
      <Breadcrumb title={"Register Page"} />
      <section className="gi-register padding-tb-40">
        <div className="container">
          <div className="section-title-2">
            <h2 className="gi-title">
              สมัครเข้าใช้งานลูกค้าธุรกิจ
              <span></span>
            </h2>
          </div>
          <form onSubmit={(e) => e.preventDefault()}>
            <Card
              variant="outlined"
              sx={{ padding: 2, backgroundColor: "#0000" }}
            >
              <Card style={{ padding: 20, border: "1px solid #fff" }}>
                <CardHeader
                  title="ข้อมูลลูกค้า"
                  subheader="กรอกข้อมูลลูกค้าสำหรับการลงทะเบียน"
                  sx={{
                    backgroundColor: "#f5f5f5",
                    borderBottom: "1px solid #ddd",
                    mb: 2,
                    "& .MuiCardHeader-title": {
                      fontWeight: "bold",
                      fontSize: "1.1rem",
                    },
                    "& .MuiCardHeader-subheader": {
                      fontSize: "0.9rem",
                      color: "text.secondary",
                    },
                  }}
                />
                <Grid container spacing={2}>
                  <Grid display="flex" size={{ xs: 12, md: 12 }}>
                    <Controller
                      control={control}
                      rules={{ required: "กรุณากรอก ชื่อลูกค้า" }}
                      name="store_name"
                      render={({ field, fieldState }) => {
                        return (
                          <FormControl fullWidth>
                            <TextField
                              fullWidth
                              required
                              color="success"
                              label="ชื่อลูกค้า"
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
                </Grid>
              </Card>
              <Card
                style={{ padding: 20, border: "1px solid #fff", marginTop: 20 }}
              >
                <CardHeader
                  title="ข้อมูลที่อยู่ของลูกค้า"
                  subheader="กรุณากรอกข้อมูลที่อยู่ให้ครบถ้วน"
                  sx={{
                    backgroundColor: "#f5f5f5",
                    borderBottom: "1px solid #ddd",
                    mb: 2,
                    "& .MuiCardHeader-title": {
                      fontWeight: "bold",
                      fontSize: "1.1rem",
                    },
                    "& .MuiCardHeader-subheader": {
                      fontSize: "0.9rem",
                      color: "text.secondary",
                    },
                  }}
                />
                {addressFields.map((item, index) => (
                  <Grid container spacing={2} key={item.id}>
                    <Grid display="flex" size={{ xs: 12, md: 3 }}>
                      <Controller
                        control={control}
                        name={`address.${index}.is_contact`}
                        render={({ field }) => (
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={field.value || false}
                                onChange={(e) =>
                                  field.onChange(e.target.checked)
                                }
                                color="success"
                              />
                            }
                            label="ใช้เป็นที่อยู่สำหรับติดต่อ"
                          />
                        )}
                      />
                    </Grid>
                    <Grid display="flex" size={{ xs: 12, md: 3 }}>
                      <Controller
                        control={control}
                        name={`address.${index}.is_register`}
                        render={({ field }) => {
                          const isAnyRegisterChecked =
                            addressValues?.some(
                              (a, i) => a.is_register && i !== index
                            ) ?? false;
                          return (
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={field.value || false}
                                  onChange={(e) =>
                                    field.onChange(e.target.checked)
                                  }
                                  color="success"
                                  disabled={
                                    !field.value && isAnyRegisterChecked
                                  }
                                />
                              }
                              label="ใช้เป็นที่ทางภาษี"
                            />
                          );
                        }}
                      />
                    </Grid>
                    <Grid display="flex" size={{ xs: 12, md: 12 }}>
                      <Controller
                        control={control}
                        rules={{ required: "กรุณากรอก ทีอยู่" }}
                        name={`address.${index}.address`}
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
                        name={`address.${index}.province`}
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
                                onChange={async (e, value) => {
                                  if (value) {
                                    field.onChange(value);
                                    handleProvinceChange(value, index);
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
                        name={`address.${index}.district`}
                        control={control}
                        rules={{ required: "กรุณากรอกข้อมูล" }}
                        render={({ field, fieldState }) => {
                          const selectedOption =
                            districtsByIndex[index] ||
                            []?.find(
                              (option: string) => option == field.value
                            ) ||
                            null;
                          return (
                            <FormControl fullWidth>
                              <Autocomplete
                                fullWidth
                                options={districtsByIndex[index] || []}
                                getOptionLabel={(option: string) => option}
                                onChange={async (e, value) => {
                                  if (value) {
                                    field.onChange(value);
                                    handleDistrictChange(value, index);
                                  }
                                }}
                                value={field.value}
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
                        name={`address.${index}.sub_district`}
                        control={control}
                        rules={{ required: "กรุณากรอกข้อมูล" }}
                        render={({ field, fieldState }) => {
                          const selectedOption =
                            subDistrictsByIndex[index] ||
                            []?.find(
                              (option: string) => option === field.value
                            ) ||
                            null;
                          return (
                            <FormControl fullWidth>
                              <Autocomplete
                                fullWidth
                                options={subDistrictsByIndex[index] || []}
                                getOptionLabel={(option: string) => option}
                                onChange={(e, value) => {
                                  if (value) {
                                    field.onChange(value);
                                    handleSubDistrictChange(value, index);
                                  }
                                }}
                                value={field.value}
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
                        name={`address.${index}.postal_code`}
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
                      {index != 0 && (
                        <Button
                          color="error"
                          variant="outlined"
                          onClick={() => {
                            addressRemove(index);
                          }}
                        >
                          ลบ
                        </Button>
                      )}
                    </Grid>
                  </Grid>
                ))}
                <Grid container spacing={2}>
                  <Button
                    style={{ marginTop: 20 }}
                    variant="outlined"
                    onClick={() => {
                      addressAppend({
                        province: "",
                        district: "",
                        sub_district: "",
                        postal_code: "",
                        address: "",
                      });
                    }}
                  >
                    เพิ่มที่อยู่
                  </Button>
                </Grid>
              </Card>
              <Card
                style={{ padding: 20, border: "1px solid #fff", marginTop: 20 }}
              >
                <CardHeader
                  title="เอกสารของบริษัท"
                  subheader={
                    <>
                      หนังสือรับรองนิติบุคคล หรือ สำเนาทะเบียนพานิชร้านค้า
                      <br />
                      กรุณาแนบเอกสารอย่างน้อย 1 อย่าง
                    </>
                  }
                  sx={{
                    backgroundColor: "#f5f5f5",
                    borderBottom: "1px solid #ddd",
                    mb: 2,
                    "& .MuiCardHeader-title": {
                      fontWeight: "bold",
                      fontSize: "1.1rem",
                    },
                    "& .MuiCardHeader-subheader": {
                      fontSize: "0.9rem",
                      color: "text.secondary",
                    },
                  }}
                />
                {attachmentFields.map((item, index) => (
                  <Grid container key={item.id} spacing={2} sx={{ mb: 2 }}>
                    <Grid
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      size={{ xs: 1, md: 1 }}
                    >
                      <Typography>{index + 1}</Typography>
                    </Grid>
                    <Grid display="flex" size={{ xs: 4, md: 4 }}>
                      <Controller
                        control={control}
                        rules={{ required: "กรุณากรอก รายละเอียดเอกสาร" }}
                        name={`attachment.${index}.description`}
                        render={({ field, fieldState }) => {
                          return (
                            <FormControl fullWidth>
                              <TextField
                                fullWidth
                                required
                                // type=""
                                multiline
                                color="success"
                                label="รายละเอียดเอกสาร"
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

                    <Grid display="flex" size={{ xs: 6, md: 6 }}>
                      <Controller
                        name={`attachment.${index}.file`}
                        control={control}
                        rules={{ required: "กรุณาอัปโหลดเอกสาร" }}
                        render={({ field, fieldState }) => {
                          return (
                            <DropzoneUploadSingle
                              error={fieldState.error?.message}
                              file={field.value}
                              setFile={(file) => field.onChange(file)}
                              accept={{
                                "image/png": [],
                                "image/jpeg": [],
                                "application/pdf": [],
                              }}
                            />
                          );
                        }}
                      />
                    </Grid>
                    <Grid display="flex" size={{ xs: 1, md: 1 }}>
                      {index != 0 && (
                        <Button
                          color="error"
                          variant="outlined"
                          onClick={() => {
                            attachmentRemove(index);
                          }}
                        >
                          ลบ
                        </Button>
                      )}
                    </Grid>
                  </Grid>
                ))}
                <Grid container spacing={2}>
                  <Button
                    style={{ marginTop: 20 }}
                    variant="outlined"
                    onClick={() => {
                      attachmentAppend({
                        description: "",
                        file: null,
                      });
                    }}
                  >
                    เพิ่มไฟล์
                  </Button>
                </Grid>
              </Card>
              <Card
                style={{ padding: 20, border: "1px solid #fff", marginTop: 20 }}
              >
                <Grid
                  size={{ xs: 12, md: 12 }}
                  display="flex"
                  justifyContent="center"
                >
                  <Button
                    variant="contained"
                    color="success"
                    onClick={(e) => {
                      handleSubmit(handleClickSave, (e) => {})(e);
                    }}
                    type="submit"
                  >
                    สมัครเข้าใช้งาน
                  </Button>
                </Grid>
              </Card>
            </Card>
          </form>
        </div>
      </section>
    </>
  );
};

export default RegisterB2BPage;
