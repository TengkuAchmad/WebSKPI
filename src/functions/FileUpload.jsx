// LIBRARY IMPORT
import { useCallback, useEffect, useState, useMemo } from "react";
import { useDropzone } from "react-dropzone";
import excel from "../assets/excel.png";
import { Stack } from "react-bootstrap";
import * as XLSX from "xlsx";
import { MdClose } from "react-icons/md";

// STYLING IMPORT
const baseStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#bdbdbd",
  transition: "border .3s ease-in-out",
};

const activeStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

function FileUpload({ onUpload }) {
  const [files, setFiles] = useState([]);

  const readExcelFile = useCallback(
    (file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const parsedData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
        const sheetHeaders = parsedData[0];
        const sheetData = parsedData.slice(1);
        onUpload(sheetData);
      };
      reader.readAsArrayBuffer(file);
    },
    [onUpload]
  );
  
  const onDrop = useCallback(
    (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
      acceptedFiles.forEach((file) => readExcelFile(file));
    },
    [readExcelFile]
  );


  const removeFile = (fileName) => {
    setFiles(files.filter((file) => file.name !== fileName));
    onUpload([]);
  };

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragReject,
    isDragAccept,
  } = useDropzone({ onDrop, accept: ".xls, .xlsx" });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept]
  );

  //   CLEAN UP
  useEffect(
    () => () => {
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  return (
    <section>
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <div>
          {isDragActive
            ? "Drop the files here"
            : "Drag and drop your Excel files here, or click to select files"}
        </div>
      </div>
      <aside>
        {files.map((file) => (
          <div
            key={file.name}
            className="d-flex justify-content-between align-items-center mt-3"
          >
            <Stack direction="horizontal" gap={3}>
              <img
                src={excel}
                alt="Excel Document"
                style={{ width: "50px", height: "auto" }}
              />
              <h6 className="p-0 mt-2">
                {file.name} - {Math.round(file.size / 1024)} KB
              </h6>
            </Stack>
            <div className="text-end">
              <MdClose
                onClick={() => removeFile(file.name)}
                style={{ cursor: "pointer" }}
                size={20}
              />
            </div>
          </div>
        ))}
      </aside>
    </section>
  );
}

export default FileUpload;
