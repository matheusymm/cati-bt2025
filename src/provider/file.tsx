import { ReactNode, useEffect, useState } from "react";
import { FilesContext, FileProps } from "../context/file";
import { api } from "../services/api";

type FilesProviderProps = {
  children: ReactNode;
};

export const FilesProvider = ({
  children,
}: FilesProviderProps): JSX.Element => {
  const [isLoading, setIsLoading] = useState(false);
  const [files, setFiles] = useState<FileProps[]>([]);

  const fetchFiles = async () => {
    setIsLoading(true);

    await api
      .get("/files")
      .then((response) => {
        setFiles(response.data);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchFiles();
  }, []);

  return (
    <FilesContext.Provider value={{ isLoading, files }}>
      {children}
    </FilesContext.Provider>
  );
};
