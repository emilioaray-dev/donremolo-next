import { FC } from "react";

const IconPizza: FC<{
  fill: string;
  width: number;
  height: number;
  stroke: any;
}> = ({ fill, width, height, stroke }) => {
  return (
    <>
      <svg
        width={38}
        height={38}
        stroke=""
        viewBox="6 7 25 30"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <g data-name="Capa 2" id="Capa_2">
            <path
              id="svg_1"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke={stroke}
              stroke-width="1.8px"
              fill="none"
              d="m8.89,11c0,0.19 0,21.92 0,22.1a3.94,3.94 0 0 0 0.18,1.2a1.63,1.63 0 0 0 2.34,0.79a50.87,50.87 0 0 1 4.54,-3.34c0.23,-0.13 -0.08,1.83 0.48,2.22a2.27,2.27 0 0 0 2.4,0.09c1.2,-1.09 0.39,-4.06 0.62,-4.1s-0.1,1.06 0.81,1.51a2.4,2.4 0 0 0 2,0c1.23,-0.84 0.41,-3 0.77,-4.85c0.12,-0.64 8.06,-6.26 8.37,-6.68"
              class="cls-1"
            />
            <path
              id="svg_2"
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke={stroke}
              stroke-width="1.8px"
              fill="none"
              d="m9,13.39c0.14,0 -0.08,-0.06 0.13,-0.09c7.13,-0.87 17.27,4.31 20.13,7.87c0.17,0.21 0,0 0.05,0.13"
              class="cls-2"
            />
            <path
              id="svg_3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke={stroke}
              stroke-width="1.8px"
              fill="none"
              d="m31.09,20.17c0,-0.14 0.69,-0.56 0.69,-1.17c0,-5.81 -17.31,-11 -20.78,-10.13c-1.24,0.33 -2.24,1.79 -2.11,2.13"
              class="cls-1"
            />
          </g>
          <g data-name="Capa 3" id="Capa_3">
            <circle
              id="svg_4"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke={stroke}
              r="0.85"
              cy="22.5"
              cx="19.39"
              class="cls-3"
            />
            <circle
              id="svg_5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke={stroke}
              r="0.85"
              cy="18.99"
              cx="14.14"
              class="cls-3"
            />
            <circle
              id="svg_6"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke={stroke}
              r="0.85"
              cy="26.88"
              cx="14.16"
              class="cls-3"
            />
          </g>
        </g>
      </svg>
    </>
  );
};
export default IconPizza;
