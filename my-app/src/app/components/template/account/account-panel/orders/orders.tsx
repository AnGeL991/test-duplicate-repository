import { FC, useEffect, useRef, useState } from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

import styles from "./orders.module.scss";

import { AccountPanel } from "app/components/template";

interface OrdersProps {
  id: string;
  hidden: boolean;
}

export const Orders: FC<OrdersProps> = ({ id, hidden }) => {
  const [columnsWidth, setColumnsWidth] = useState({
    timestamp: 160,
    id: 160,
    price: 160,
    paymentStatus: 160,
    paymentType: 160,
  });

  const gridRef = useRef<HTMLDivElement | null>(null);

  const columns: GridColDef[] = [
    {
      field: "timestamp",
      headerName: "Date, Time",
      width: columnsWidth["timestamp"],
    },
    {
      field: "id",
      headerName: "Order Number",
      width: columnsWidth["id"],
      description: "This column has a value getter and is not sortable.",
    },
    {
      field: "price",
      headerName: "Price",
      description: "This column has a value getter and is not sortable.",
      width: columnsWidth["price"],
    },
    {
      field: "paymentStatus",
      headerName: "Payment Status",
      width: columnsWidth["paymentStatus"],
      description: "This column has a value getter and is not sortable.",
    },
    {
      field: "paymentType",
      headerName: "Payment Type",
      width: columnsWidth["paymentType"],
      description: "This column has a value getter and is not sortable.",
    },
  ];

  const rows = [
    {
      id: 1,
      timestamp: "21.02.2022 15:55",
      price: "£38.55",
      paymentStatus: "success",
      paymentType: "card",
    },
    {
      id: 2,
      timestamp: "21.02.2022 15:55",
      price: "£75.55",
      paymentStatus: "error",
      paymentType: "cash",
    },
    {
      id: 3,
      timestamp: "21.02.2022 15:55",
      price: "£38.55",
      paymentStatus: "pending",
      paymentType: "card",
    },
    {
      id: 4,
      timestamp: "21.02.2022 15:55",
      price: "£38.55",
      paymentStatus: "success",
      paymentType: "cash",
    },
  ];

  const handleResizeColumn = () => {
    if (!gridRef.current) return;
    const totalWidth = gridRef.current.getBoundingClientRect()?.width - 8;
    const columnsCount = Object.keys(columnsWidth).length;
    const resizeWidth = Object.keys(columnsWidth).reduce(
      (acc, curr) => ({
        ...acc,
        [curr]: (totalWidth / columnsCount - 1).toFixed(0),
      }),
      {} as any
    );
    console.log(resizeWidth);
    setColumnsWidth(resizeWidth);
  };

  useEffect(() => {
    handleResizeColumn();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gridRef.current]);

  return (
    <AccountPanel {...{ id, hidden }}>
      <div style={{ height: 319, width: "100%" }}>
        <DataGrid
          ref={gridRef}
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
        />
      </div>
    </AccountPanel>
  );
};
