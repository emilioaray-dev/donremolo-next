import { FC } from "react";

const IconBebida: FC<{
  fill: string;
  width: number;
  height: number;
  stroke: any;
}> = ({ fill, width, height, stroke }) => {
  return (
    <>
      <svg
        width={width}
        height={height}
        viewBox="0 0 16 34"
        fill="none"
        stroke=""
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.826172 21.8447C0.826172 20.293 1.32945 18.7832 2.26048 17.5418L5.12909 13.717C5.43944 13.3032 5.6072 12.7999 5.6072 12.2827V1.12695H10.3882V12.2827C10.3882 12.7999 10.556 13.3032 10.8663 13.717L13.7349 17.5418C14.666 18.7832 15.1692 20.293 15.1692 21.8447V31.4068C15.1692 31.8295 15.0013 32.2348 14.7025 32.5337C14.4036 32.8326 13.9982 33.0005 13.5756 33.0005H2.41985C1.99718 33.0005 1.59182 32.8326 1.29295 32.5337C0.994077 32.2348 0.826172 31.8295 0.826172 31.4068V21.8447Z"
          stroke={stroke}
          strokeWidth="1.64"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};
export default IconBebida;
