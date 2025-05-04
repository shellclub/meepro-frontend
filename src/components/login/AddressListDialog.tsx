"use client";

// React Imports

// MUI Imports
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import { Box, FormControlLabel, Radio, RadioGroup } from "@mui/material";

import { IUserAddress } from "@/types/user/userType";
import OpenDialogOnElementClick from "../dialog/OpenDialogOnElementClick";
import FormAddressDialog from "./FormAddressDialog";
import { FORM_TYPE } from "@/constants/confix-value.constant";
import { Controller, UseFormReturn } from "react-hook-form";
import { ICreateOrder } from "@/types/checkout/checkOutType";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  selectedAddressId: string;
  setSelectedAddressId: any;
  addressList: IUserAddress[];
  setAddressSelect: any;
  refetch: any;
  clientForm: UseFormReturn<ICreateOrder, any, undefined>;
};

const AddressListDialog = ({
  open,
  setOpen,
  selectedAddressId,
  setSelectedAddressId,
  addressList,
  setAddressSelect,
  refetch,
  clientForm,
}: Props) => {
  const handleClose = () => {
    setOpen(false);
  };
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

  const handleConfirmSelect = () => {
    // หาที่อยู่ที่เลือกจาก addressList
    const selectedAddress = addressList?.find(
      (item) => item.id === selectedAddressId
    );
    if (selectedAddress) {
      setAddressSelect(selectedAddress);
    }
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
      <DialogTitle>เลือกที่อยู่</DialogTitle>
      <DialogContent>
        รายการที่อยู่ที่สามารถเลือกได้
        <Controller
          control={control}
          name="address_id"
          render={({ field, fieldState }) => {
            return (
              <RadioGroup
                value={selectedAddressId} // ต้องมี state มาเก็บ address ที่เลือก
                onChange={(e) => {
                  setValue("address_id", e.target.value);
                  setSelectedAddressId(e.target.value);
                }}
              >
                {addressList?.map((item) => (
                  <Box
                    key={item.id}
                    border={1}
                    borderRadius={2}
                    borderColor="grey.300"
                    padding={2}
                    marginBottom={2}
                  >
                    <FormControlLabel
                      value={item.id}
                      control={<Radio />}
                      label={
                        <Box>
                          <Box
                            fontWeight="bold"
                            paddingBottom={0.5}
                            marginBottom={1}
                            borderBottom="1px solid"
                            borderColor="grey.400"
                          >
                            {item.recipient_name}{" "}
                            {item.is_primary && "(ที่อยู่หลัก)"}
                          </Box>
                          <Box fontSize="0.875rem" color="text.secondary">
                            เบอร์โทร: {item.recipient_phone}
                          </Box>
                          <Box fontSize="0.875rem">{item.full_address}</Box>
                        </Box>
                      }
                    />
                    <OpenDialogOnElementClick
                      dialogProps={{
                        id: item.id,
                        refetch: refetch,
                        type: FORM_TYPE.UPDATE,
                        modalData: {
                          ...item,
                        },
                      }}
                      element={Button}
                      elementProps={{
                        variant: "outlined",
                        color: "success",
                        children: "แก้ไข",
                      }}
                      dialog={FormAddressDialog}
                    />
                  </Box>
                ))}
              </RadioGroup>
            );
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button color="success" onClick={handleClose}>
          ยกเลิก
        </Button>
        <Button
          color="success"
          onClick={handleConfirmSelect}
          variant="contained"
          disabled={!selectedAddressId}
        >
          ตกลง
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddressListDialog;
