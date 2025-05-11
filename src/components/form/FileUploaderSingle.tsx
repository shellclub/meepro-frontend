import React from "react";
import { Accept, useDropzone } from "react-dropzone";
import { Avatar, Typography, IconButton, Box } from "@mui/material";

type FileUploaderSingleProps = {
  file: File | string | null | undefined; // Can be File or URL
  setFile: (file: File | null) => void; // Updates the parent state or form
  accept?: Accept | undefined;
};

const FileUploaderSingle: React.FC<FileUploaderSingleProps> = ({
  file,
  setFile,
  accept,
}) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: accept,
    onDrop: (acceptedFiles: File[]) => {
      if (acceptedFiles.length > 0) {
        setFile(acceptedFiles[0]); // Replace the existing file
      }
    },
    multiple: false, // Restrict to a single file
  });

  const renderFilePreview = () => {
    if (file instanceof File && file.type.startsWith("image")) {
      return (
        <img
          width={100}
          height={100}
          alt={file.name}
          src={URL.createObjectURL(file)}
        />
      );
    } else if (typeof file === "string") {
      return <img width={100} height={100} alt="uploaded" src={file} />;
    }
    return <i className="tabler-file-description text-4xl" />;
  };

  const handleRemoveFile = () => {
    setFile(null);
  };

  return (
    <div>
      {!file ? (
        <div {...getRootProps({ className: "dropzone" })}>
          <input {...getInputProps()} />
          <div className="flex items-center flex-col">
            <Avatar variant="rounded" className="bs-12 is-12 mbe-9">
              <i className="tabler-upload" />
            </Avatar>
            <Typography variant="h4" className="mbe-2.5">
              วางไฟล์ที่นี่หรือคลิกเพื่ออัปโหลด
            </Typography>
            <Typography>
              วางไฟล์ที่นี่หรือคลิก{" "}
              <a
                href="/"
                onClick={(e) => e.preventDefault()}
                className="text-textPrimary no-underline"
              >
                เรียกดู
              </a>{" "}
              ผ่านเครื่องของคุณ
            </Typography>
          </div>
        </div>
      ) : (
        <Box className="file-details flex items-center">
          <div className="file-preview">{renderFilePreview()}</div>
          <Box className="flex-grow" sx={{ ml: 2 }}>
            <Typography className="file-name">
              {" "}
              {file instanceof File ? file.name : file}
            </Typography>
            <Typography className="file-size" variant="body2">
              {file instanceof File ? `${Math.round(file.size / 1024)} KB` : ""}
            </Typography>
          </Box>
          <IconButton onClick={handleRemoveFile}>
            <i className="tabler-x text-xl" />
          </IconButton>
        </Box>
      )}
    </div>
  );
};

export default FileUploaderSingle;
