"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { clearCart, clearCartItem } from "../../store/reducers/cartCustomSlice";
import {
  Box,
  Button,
  Card,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { useGetUserAddress } from "@/hooks/user/address/useGetUserAddress";
import { IUserAddress } from "@/types/user/userType";
import OpenDialogOnElementClick from "../dialog/OpenDialogOnElementClick";
import AddressListDialog from "./AddressListDialog";
import FormAddressDialog from "./FormAddressDialog";
import {
  FORM_TYPE,
  MESSAGE,
  PAYMENT_METHOD,
} from "@/constants/confix-value.constant";
import { CommonHelper } from "@/helper/common-helper";
import { Controller, useForm } from "react-hook-form";
import { ICreateOrder, IOrderItem } from "@/types/checkout/checkOutType";
import { Col, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import useCreateOrder from "@/hooks/order/useCreateOrder";
import { useAppDispatch } from "@/store/hook/hook";

const CheckOutCustom = ({}) => {
  const dispatch = useAppDispatch();
  const { data: addressList, refetch } = useGetUserAddress();
  const [addressSelect, setAddressSelect] = useState<IUserAddress>();
  const [selectedAddressId, setSelectedAddressId] = useState<string | null>(
    null
  );

  const clientForm = useForm<ICreateOrder>({
    defaultValues: {
      payment: {
        payment_method: PAYMENT_METHOD.BANK_TRANSFER.key,
      },
    },
  });
  const { control, handleSubmit, setValue } = clientForm;

  useEffect(() => {
    if (addressList) {
      const address = addressList.find((el) => el.is_primary) || addressList[0];
      setAddressSelect(address);
      setValue("address_id", address.id);
    }
  }, [addressList]);

  const router = useRouter();
  const cartItems = useSelector((state: RootState) => state.cartCustom.items);

  const [subTotal, setSubTotal] = useState(0);
  const [vat, setVat] = useState(0);

  const [previewURL, setPreviewURL] = useState<string | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const { mutateAsync: carateApi } = useCreateOrder();

  useEffect(() => {
    if (cartItems.length === 0) {
      setSubTotal(0);
      setVat(0);
      return;
    }
    const subtotal = cartItems.reduce(
      (acc, item) => acc + item.newPrice * item.productQuantityCart,
      0
    );
    setSubTotal(subtotal);
    const vatAmount = subtotal * 0.2;
    setVat(vatAmount);
    handleSetItemCart();
    setValue("total_amount", subtotal);
    setValue("payment.amount", subtotal);
  }, [cartItems]);

  const handleSetItemCart = () => {
    const orderItem: IOrderItem[] = [];
    cartItems.map((el) => {
      orderItem.push({
        variant_id: el.id,
        quantity: el.productQuantityCart,
        unit_price: el.newPrice,
        total_price: el.newPrice * el.productQuantityCart,
      });
    });
    setValue("order_item", orderItem);
  };

  const handleClickSave = async (data: ICreateOrder) => {
    await toast.promise(
      carateApi(data).then(() => {
        dispatch(clearCart());
      }),
      {
        pending: MESSAGE.SAVING,
        success: MESSAGE.SAVED_SUCCESS,
        error: MESSAGE.SAVE_FAILED,
      }
    );

    router.push("/orders");
  };

  return (
    <>
      <Breadcrumb title={"Checkout"} />
      <section className="gi-checkout-section padding-tb-40">
        <h2 className="d-none">Checkout Page</h2>
        <div className="container">
          {cartItems.length === 0 ? (
            <div
              style={{
                textAlign: "center",
                fontSize: "20px",
                fontWeight: "300",
              }}
              className="gi-pro-content cart-pro-title"
            >
              {" "}
              Your cart is currently empty. Please add items to your cart to
              proceed.
            </div>
          ) : (
            <>
              <form onSubmit={(e) => e.preventDefault()}>
                <Row>
                  {/* <!-- Sidebar Area Start --> */}
                  <Col lg={12} md={12} className="gi-checkout-rightside">
                    <div className="gi-sidebar-wrap">
                      <div className="gi-sb-title">
                        <h3 className="gi-sidebar-title">ที่อยู่ในการจัดส่ง</h3>
                      </div>
                      <div className="gi-sidebar-block">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            {addressSelect && (
                              <Box
                                border={1}
                                borderRadius={2}
                                borderColor="grey.300"
                                padding={2}
                                marginBottom={2}
                              >
                                <Box fontWeight="bold">
                                  {addressSelect.recipient_name}{" "}
                                  {addressSelect.is_primary && "(ที่อยู่หลัก)"}
                                </Box>
                                <Box fontSize="0.875rem" color="text.secondary">
                                  เบอร์โทร: {addressSelect.recipient_phone}
                                </Box>
                                <Box fontSize="0.875rem">
                                  {addressSelect.full_address}
                                </Box>
                              </Box>
                            )}
                            <OpenDialogOnElementClick
                              dialogProps={{
                                refetch: refetch,
                                selectedAddressId: selectedAddressId,
                                setSelectedAddressId: setSelectedAddressId,
                                addressList: addressList,
                                setAddressSelect: setAddressSelect,
                                clientForm: clientForm,
                              }}
                              element={Button}
                              elementProps={{
                                variant: "outlined",
                                color: "success",
                                children: "เลือกที่อยู่",
                              }}
                              dialog={AddressListDialog}
                            />

                            <OpenDialogOnElementClick
                              dialogProps={{
                                refetch: refetch,
                                type: FORM_TYPE.CREATE,
                                modalData: {
                                  address_type: "SHOPPING",
                                },
                              }}
                              element={Button}
                              elementProps={{
                                variant: "outlined",
                                color: "success",
                                children: "เพิ่มที่อยู่",
                              }}
                              dialog={FormAddressDialog}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="gi-sidebar-wrap">
                      <div className="gi-sidebar-block">
                        <div className="gi-sb-title">
                          <h3 className="gi-sidebar-title">สรุปคำสั่งซื้อ</h3>
                        </div>
                        <div className="gi-sb-block-content">
                          <div className="gi-checkout-summary">
                            <div className="gi-checkout-summary-total">
                              <span className="text-left">
                                สั่งซื้อสินค้าแล้ว
                              </span>
                              <span className="text-right"></span>
                            </div>
                          </div>
                          <div className="gi-checkout-pro">
                            {cartItems.map((item: any, index: number) => (
                              <div key={index} className="col-sm-12 mb-6">
                                <div className="gi-product-inner">
                                  <div className="gi-pro-image-outer">
                                    <div className="gi-pro-image">
                                      <a
                                        href="/product-left-sidebar"
                                        className="image"
                                      >
                                        <img
                                          className="main-image"
                                          src={item.image}
                                          alt="Product"
                                        />
                                        <img
                                          className="hover-image"
                                          src={item.imageTwo}
                                          alt="Product"
                                        />
                                      </a>
                                    </div>
                                  </div>
                                  <div className="gi-pro-content">
                                    <h5 className="gi-pro-title">
                                      <a href="/product-left-sidebar">
                                        {item.title}
                                      </a>
                                    </h5>
                                    <span className="gi-price">
                                      <span className="new-price">
                                        • {item.option}
                                      </span>
                                    </span>
                                    <div>
                                      <Typography fontSize={"xs"}>
                                        {" "}
                                        x{item.productQuantityCart}
                                      </Typography>
                                    </div>
                                    <span className="gi-price">
                                      <span className="new-price">
                                        ฿
                                        {CommonHelper.formatNumber(
                                          item.newPrice
                                        )}
                                      </span>
                                    </span>
                                  </div>
                                  <div style={{ marginRight: "8px" }}>
                                    <Typography fontSize="xs">
                                      ฿
                                      {CommonHelper.formatNumber(
                                        item.productQuantityCart * item.newPrice
                                      )}
                                    </Typography>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="gi-checkout-summary">
                          <div className="gi-checkout-summary-total">
                            <span className="text-left">
                              สั่งซื้อสินค้าแล้ว
                            </span>
                            <span className="text-right">
                              ฿{subTotal.toFixed(2)}
                            </span>
                          </div>
                          <div>
                            <span className="text-left mt-2">รวมค่าสินค้า</span>
                            <span className="text-right">
                              ฿{subTotal.toFixed(2)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Card
                      variant="outlined"
                      sx={{ padding: 2, backgroundColor: "#f9f9f9" }}
                    >
                      <Typography
                        style={{ marginBottom: 5 }}
                        fontSize={20}
                        fontWeight={600}
                        color="#4b5966"
                      >
                        ตัวเลือกการชำระเงิน
                      </Typography>

                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          marginBottom: "1rem", // or any value you prefer
                        }}
                      >
                        <Image
                          src="/assets/img/payment/payment.png"
                          alt="payment"
                          width={450}
                          height={450}
                          className="mb-3"
                        />
                      </div>
                      <Grid container spacing={2}>
                        <Grid display="flex" size={{ xs: 12, md: 12 }}>
                          <Controller
                            name="payment.payment_method"
                            control={control}
                            rules={{ required: true }}
                            render={({ field, fieldState }) => (
                              <FormControl
                                component="fieldset"
                                error={fieldState.invalid}
                              >
                                <FormLabel id="gender-radio-group-label">
                                  ชำระเงินด้วย
                                </FormLabel>
                                <RadioGroup
                                  row
                                  aria-labelledby="gender-radio-group-label"
                                  value={field.value}
                                  onChange={(e) =>
                                    field.onChange(e.target.value)
                                  }
                                >
                                  <FormControlLabel
                                    key={`img-type-${PAYMENT_METHOD.BANK_TRANSFER.key}`}
                                    value={PAYMENT_METHOD.BANK_TRANSFER.key}
                                    control={<Radio />}
                                    label={PAYMENT_METHOD.BANK_TRANSFER.label}
                                  />
                                </RadioGroup>
                                {fieldState.error && (
                                  <FormHelperText>
                                    {fieldState.error.message}
                                  </FormHelperText>
                                )}
                              </FormControl>
                            )}
                          />
                        </Grid>
                        <Grid display="flex" size={{ xs: 12, md: 4 }}>
                          <Controller
                            control={control}
                            rules={{ required: "กรุณากรอก จำนวนเงินที่ชำระ" }}
                            name="payment.amount"
                            render={({ field, fieldState }) => {
                              return (
                                <FormControl fullWidth>
                                  <TextField
                                    fullWidth
                                    required
                                    disabled
                                    color="success"
                                    label="จำนวนเงินที่ชำระ"
                                    value={field.value || ""}
                                    onChange={(e) =>
                                      field.onChange(e.target.value)
                                    }
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
                        <Grid display="flex" size={{ xs: 12, md: 4 }}>
                          <Controller
                            control={control}
                            rules={{ required: "กรุณากรอก วันที่ชำระ" }}
                            name="payment.paid_date"
                            render={({ field, fieldState }) => {
                              return (
                                <FormControl fullWidth>
                                  <TextField
                                    fullWidth
                                    focused
                                    required
                                    type="date"
                                    color="success"
                                    label="วันที่ชำระ"
                                    value={field.value || ""}
                                    onChange={(e) =>
                                      field.onChange(e.target.value)
                                    }
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
                        <Grid display="flex" size={{ xs: 12, md: 4 }}>
                          <Controller
                            control={control}
                            rules={{ required: "กรุณากรอก เวลาที่ชำระ" }}
                            name="payment.paid_time"
                            render={({ field, fieldState }) => {
                              return (
                                <FormControl fullWidth>
                                  <TextField
                                    fullWidth
                                    focused
                                    required
                                    type="time"
                                    color="success"
                                    label="เวลาที่ชำระ"
                                    value={field.value || ""}
                                    onChange={(e) =>
                                      field.onChange(e.target.value)
                                    }
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
                            name="payment.file"
                            control={control}
                            rules={{
                              required: "กรุณาอัปโหลดหลักฐานการชำระเงิน",
                            }}
                            render={({ field, fieldState }) => (
                              <FormControl fullWidth error={fieldState.invalid}>
                                <Typography variant="subtitle1" gutterBottom>
                                  อัปโหลดหลักฐานการชำระเงิน
                                </Typography>

                                <input
                                  accept=".png, .jpg, .jpeg"
                                  id="file-upload"
                                  type="file"
                                  style={{ display: "none" }}
                                  onChange={(e) => {
                                    const file = e.target.files?.[0];
                                    if (file) {
                                      setPreviewURL(URL.createObjectURL(file));
                                      field.onChange(file); // pass file to react-hook-form
                                    }
                                  }}
                                />
                                <label htmlFor="file-upload">
                                  <Button
                                    variant="outlined"
                                    color="primary"
                                    component="span"
                                  >
                                    เลือกไฟล์
                                  </Button>
                                </label>
                                {fieldState.error && (
                                  <FormHelperText>
                                    {fieldState.error.message}
                                  </FormHelperText>
                                )}
                                {previewURL && (
                                  <Box
                                    mt={2}
                                    display="flex"
                                    justifyContent="center"
                                  >
                                    <img
                                      src={previewURL}
                                      alt="preview"
                                      style={{
                                        maxWidth: "20%",
                                        height: "auto",
                                        borderRadius: 8,
                                      }}
                                    />
                                  </Box>
                                )}
                              </FormControl>
                            )}
                          />
                        </Grid>
                        <Grid display="flex" size={{ xs: 12, md: 12 }}>
                          <Controller
                            control={control}
                            name="comment"
                            render={({ field }) => {
                              return (
                                <FormControl fullWidth>
                                  <TextField
                                    fullWidth
                                    required
                                    multiline
                                    color="success"
                                    rows={4}
                                    label="ฝากข้อความถึงผู้ขายหรือบริษัทขนส่ง"
                                    value={field.value || ""}
                                    onChange={(e) =>
                                      field.onChange(e.target.value)
                                    }
                                  />
                                </FormControl>
                              );
                            }}
                          />
                        </Grid>
                      </Grid>
                    </Card>
                  </Col>
                </Row>
                <Row>
                  <Col
                    lg={12}
                    md={12}
                    className="gi-checkout-rightside d-flex justify-content-end"
                  >
                    <Button
                      style={{ marginTop: 10 }}
                      size="large"
                      variant="contained"
                      color="success"
                      onClick={(e) => {
                        handleSubmit(handleClickSave, () => {})(e);
                      }}
                      type="submit"
                    >
                      สั่งซื้อสินค้า
                    </Button>
                  </Col>
                </Row>
              </form>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default CheckOutCustom;
