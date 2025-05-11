// React Imports
import { useState } from "react";

// MUI Imports
import List from "@mui/material/List";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import ListItem from "@mui/material/ListItem";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

// Third-party Imports
import { useDropzone } from "react-dropzone";
import { Box, Grid } from "@mui/material";

type FileProp = {
  name: string;
  type: string;
  size: number;
};

type FileUploaderMultipleProps = {
  files: File[] | null;
  setFiles: (file: File[] | null) => void;
};

const FileUploaderMultiple: React.FC<FileUploaderMultipleProps> = ({
  files,
  setFiles,
}) => {
  // States
  // const [files, setFiles] = useState<File[]>([]);

  // Hooks
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/png": [],
      "image/jpeg": [],
      "image/jpg": [],
    },
    maxFiles: 10,
    onDrop: (acceptedFiles: File[]) => {
      setFiles(acceptedFiles.map((file: File) => Object.assign(file)));
    },
  });

  const renderFilePreview = (file: FileProp) => {
    if (file.type.startsWith("image")) {
      return (
        <img
          width={150}
          height={150}
          alt={file.name}
          src={URL.createObjectURL(file as any)}
        />
      );
    } else {
      return <i className="tabler-file-description" />;
    }
  };

  const handleRemoveFile = (file: FileProp) => {
    const uploadedFiles = files;
    const filtered = uploadedFiles?.filter(
      (i: FileProp) => i.name !== file.name
    );
    setFiles([...filtered!!]);
  };

  const fileList = files?.map((file: FileProp) => (
    // <ListItem key={file.name}>
    <Box key={file.name} className="file-details flex items-center mb-2">
      <div className="file-preview">{renderFilePreview(file)}</div>
      <Box className="flex-grow" sx={{ ml: 2 }}>
        <Typography className="file-name">{file.name}</Typography>
        <Typography className="file-size" variant="body2">
          {Math.round(file.size / 1024)} KB
        </Typography>
      </Box>
      <IconButton onClick={() => handleRemoveFile(file)}>
        <i className="tabler-x text-xl" />
      </IconButton>
    </Box>
    // </ListItem>
  ));

  const handleRemoveAllFiles = () => {
    setFiles([]);
  };

  return (
    <>
      {files?.length ? (
        <>
          <List>{fileList}</List>
        </>
      ) : (
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
      )}
    </>
  );
};

export default FileUploaderMultiple;
