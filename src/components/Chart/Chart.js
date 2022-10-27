import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../store/product/action";
import { MainContainer } from "./ Chart.styles";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Chart() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.productData);

  const getMonth = () => {
    const months = product?.sales.map((sales) => {
      const date = new Date(sales.weekEnding);
      const month = date.toLocaleString("default", { month: "short" });
      return month;
    });
    return months;
  };
  const data = {
    labels: getMonth(),
    datasets: [
      {
        data: product?.sales.map((sales) => {
          return sales.retailSales;
        }),
        borderColor: "#44A9F6",
      },
      {
        data: product?.sales.map((sales) => {
          return sales.wholesaleSales;
        }),
        borderColor: "#99A4BE",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
        text: "Chart.js Line Chart",
      },
    },
    scales: {
      y: {
        display: false,
        grid: {
          display: false,
          drawBorder: false,
        },
      },
      x: {
        display: true,
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          maxRotation: 0,
        },
      },
    },
    tension: 0.5,
  };

  useEffect(() => {
    dispatch(getProduct());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <MainContainer>
      <span>Retail Sales</span>
      <Line options={options} data={data} />
    </MainContainer>
  );
}

export default Chart;
