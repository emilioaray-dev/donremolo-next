import { FC } from "react";

const IconPizza: FC<{ fill: string; width: number; height: number }> = ({
  fill,
  width,
  height,
}) => {
  return (
    <>
      <svg
        width={width}
        height={height}
        viewBox="0 0 25 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.55487 12.3003C6.90315 12.3003 7.23716 12.1619 7.48343 11.9157C7.72969 11.6694 7.86805 11.3354 7.86805 10.9871C7.86805 10.6388 7.72969 10.3048 7.48343 10.0586C7.23716 9.81228 6.90315 9.67393 6.55487 9.67393C6.2066 9.67393 5.87259 9.81228 5.62632 10.0586C5.38005 10.3048 5.2417 10.6388 5.2417 10.9871C5.2417 11.3354 5.38005 11.6694 5.62632 11.9157C5.87259 12.1619 6.2066 12.3003 6.55487 12.3003ZM13.0953 14.5015C13.0953 14.8498 12.9569 15.1838 12.7106 15.43C12.4644 15.6763 12.1304 15.8146 11.7821 15.8146C11.4338 15.8146 11.0998 15.6763 10.8535 15.43C10.6073 15.1838 10.4689 14.8498 10.4689 14.5015C10.4689 14.1532 10.6073 13.8192 10.8535 13.5729C11.0998 13.3267 11.4338 13.1883 11.7821 13.1883C12.1304 13.1883 12.4644 13.3267 12.7106 13.5729C12.9569 13.8192 13.0953 14.1532 13.0953 14.5015ZM6.5619 20.2162C6.73516 20.2162 6.90672 20.1821 7.06678 20.1158C7.22685 20.0495 7.37229 19.9523 7.4948 19.8298C7.61731 19.7073 7.71449 19.5618 7.78079 19.4017C7.8471 19.2417 7.88122 19.0701 7.88122 18.8969C7.88122 18.7236 7.8471 18.5521 7.78079 18.392C7.71449 18.2319 7.61731 18.0865 7.4948 17.964C7.37229 17.8415 7.22685 17.7443 7.06678 17.678C6.90672 17.6117 6.73516 17.5775 6.5619 17.5775C6.212 17.5775 5.87642 17.7165 5.629 17.964C5.38158 18.2114 5.24258 18.547 5.24258 18.8969C5.24258 19.2468 5.38158 19.5823 5.629 19.8298C5.87642 20.0772 6.212 20.2162 6.5619 20.2162ZM0.40625 3.43572C0.40625 1.51207 1.97854 -0.116433 3.97245 0.00653991C11.7847 0.487889 18.636 3.11599 24.0029 8.24043C25.526 9.69326 25.2256 12.0666 23.6463 13.2788C21.1887 15.176 18.7145 17.0517 16.224 18.9057V21.9624C16.224 23.222 15.249 24.5975 13.5889 24.5975C13.2709 24.5975 12.9776 24.5448 12.714 24.457V24.6028C12.714 25.8554 11.7373 27.2221 10.0736 27.2221C8.74906 27.2221 7.87595 26.3508 7.56852 25.3775C6.60582 26.0978 5.55353 26.8813 4.61367 27.5805C2.87448 28.8752 0.40625 27.6332 0.40625 25.4724V3.43572ZM12.7123 21.9624C12.7123 22.4174 13.0548 22.8408 13.5889 22.8408C14.1247 22.8408 14.4673 22.4139 14.4673 21.9624V18.4594C14.4674 18.321 14.5002 18.1845 14.5631 18.0612C14.626 17.9378 14.7172 17.8311 14.8292 17.7497C16.1994 16.7554 18.5324 14.9828 20.5983 13.4035C15.8674 8.90096 9.23567 6.22895 2.163 6.17273V25.4706C2.16348 25.6332 2.20905 25.7924 2.29464 25.9305C2.38022 26.0687 2.50246 26.1804 2.64776 26.2533C2.79306 26.3261 2.95572 26.3572 3.11764 26.3431C3.27955 26.329 3.43438 26.2702 3.56489 26.1733C4.94569 25.1439 6.5742 23.9317 7.7969 23.0147C7.9274 22.9168 8.08257 22.8572 8.24504 22.8426C8.4075 22.8279 8.57084 22.8588 8.71674 22.9317C8.86265 23.0047 8.98535 23.1168 9.07111 23.2556C9.15687 23.3944 9.2023 23.5543 9.2023 23.7174V24.6028C9.2023 25.0367 9.53608 25.4671 10.0736 25.4671C10.1887 25.4699 10.3032 25.4496 10.4104 25.4074C10.5175 25.3652 10.615 25.3019 10.6973 25.2213C10.7795 25.1407 10.8447 25.0445 10.8891 24.9382C10.9334 24.832 10.956 24.7179 10.9555 24.6028V21.9624C10.9555 21.7294 11.0481 21.506 11.2128 21.3413C11.3775 21.1766 11.6009 21.084 11.8339 21.084C12.0669 21.084 12.2903 21.1766 12.455 21.3413C12.6197 21.506 12.7123 21.7294 12.7123 21.9624ZM22.5747 11.8874C23.3916 11.2603 23.4531 10.143 22.789 9.5088C17.77 4.71814 11.335 2.21829 3.86529 1.75802C2.95354 1.7018 2.163 2.45018 2.163 3.43572V4.41598C9.76446 4.47395 16.9232 7.37962 22.009 12.3214L22.5747 11.8874Z"
          fill={fill}
        />
      </svg>
    </>
  );
};
export default IconPizza;