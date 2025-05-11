import { FC, useEffect, useState } from "react";
import {
  Paper,
  Typography,
  FormControl,
  FormHelperText,
  Box,
  Link,
} from "@mui/material";
import { useDropzone } from "react-dropzone";

interface DropzoneUploadSingleProps {
  file: File | null;
  setFile: (file: File) => void;
  accept?: { [mime: string]: string[] };
  error?: string;
  label?: string;
}

const DropzoneUploadSingle: FC<DropzoneUploadSingleProps> = ({
  file,
  setFile,
  accept = {
    "image/png": [],
    "image/jpeg": [],
    "image/jpg": [],
    "application/pdf": [],
  },
  error,
  label = "ลากและวางไฟล์ที่นี่ หรือคลิกเพื่อเลือกไฟล์",
}) => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  useEffect(() => {
    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      return () => URL.revokeObjectURL(url); // Clean up on unmount or change
    }
    setPreviewUrl(null);
  }, [file]);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        setFile(acceptedFiles[0]);
      }
    },
    multiple: false,
    accept,
  });
  return (
    <FormControl fullWidth error={!!error}>
      {/* Dropzone Upload Box */}
      <Paper
        variant="outlined"
        {...getRootProps()}
        sx={{
          p: 2,
          textAlign: "center",
          borderStyle: "dashed",
          backgroundColor: isDragActive ? "#f5f5f5" : "inherit",
          cursor: "pointer",
        }}
      >
        <input {...getInputProps()} />
        <Typography variant="body2" color="textSecondary">
          {!file && (isDragActive ? "ปล่อยไฟล์ที่นี่..." : label)}
        </Typography>

        {file && (
          <Typography mt={1} fontWeight="bold">
            ไฟล์ที่เลือก: {file.name}
          </Typography>
        )}
      </Paper>

      {file && previewUrl && (
        <Box
          position="absolute"
          bottom={0}
          right={12}
          onClick={(e) => e.stopPropagation()} // prevent triggering file input
        >
          <Link
            href={previewUrl}
            target="_blank"
            rel="noopener noreferrer"
            underline="hover"
          >
            เปิดไฟล์
          </Link>
        </Box>
      )}

      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
};

export default DropzoneUploadSingle;
