import { FC } from "react";

const IconHelado: FC<{
  fill: string;
  width: number;
  height: number;
}> = ({ fill, width, height }) => {
  return (
    <>
      <svg
        width={width}
        height={height}
        viewBox="0 0 23 31"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.1355 15.2061L11.0472 29.412L7.11523 20.2162"
          stroke={fill}
          stroke-width="1.64"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M13.8011 13.1435C13.3141 14.1753 12.2638 14.9522 11.0475 14.9522C10.2167 14.9522 9.33515 14.6351 8.91468 14.3333C8.52782 14.0561 8.00334 14.1912 8.00334 14.8254V18.7574C8.00217 19.1607 7.84144 19.5472 7.55625 19.8323C7.27106 20.1175 6.8846 20.2783 6.48128 20.2794V20.2794C6.07797 20.2783 5.6915 20.1175 5.40632 19.8323C5.12113 19.5472 4.96039 19.1607 4.95922 18.7574V15.2059H4.83238C2.59051 15.2059 0.900391 13.3889 0.900391 11.1471C0.900391 10.0706 1.32802 9.03823 2.08919 8.27705C2.85037 7.51587 3.88275 7.08825 4.95922 7.08825H5.46657V6.58089C5.46657 5.10075 6.05456 3.68123 7.10118 2.63461C8.1478 1.58799 9.56732 1 11.0475 1C12.5276 1 13.9471 1.58799 14.9938 2.63461C16.0404 3.68123 16.6284 5.10075 16.6284 6.58089V7.08825H17.1357C18.2122 7.08825 19.2446 7.51587 20.0057 8.27705C20.7669 9.03823 21.1945 10.0706 21.1945 11.1471C21.1945 12.2235 20.7669 13.2559 20.0057 14.0171C19.2446 14.7783 18.2122 15.2059 17.1357 15.2059C15.7544 15.2059 14.4721 14.3815 13.8005 13.1441L13.8011 13.1435Z"
          stroke={fill}
          stroke-width="1.64"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </>
  );
};
export default IconHelado;
