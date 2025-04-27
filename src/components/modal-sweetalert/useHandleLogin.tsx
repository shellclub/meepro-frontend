"use client";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

export const useHandleLogin = () => {
  //   const router = useRouter();

  const handleLogin = async () => {
    const result = await Swal.fire({
      icon: "info",
      title: "กรุณาลงชื่อเข้าใช้งาน",
      confirmButtonText: "ไปที่หน้าล็อกอิน",
      confirmButtonColor: "#3085d6",
    });

    // if (result.isConfirmed) {
    //   router.push("/login");
    // }
  };

  return handleLogin;
};
