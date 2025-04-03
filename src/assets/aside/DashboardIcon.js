const DashboardIcon = ({ isLinkActive }) => {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.1111 1.88889V3.77778H11.3333V1.88889H15.1111ZM5.66667 1.88889V7.55556H1.88889V1.88889H5.66667ZM15.1111 9.44444V15.1111H11.3333V9.44444H15.1111ZM5.66667 13.2222V15.1111H1.88889V13.2222H5.66667ZM17 0H9.44444V5.66667H17V0ZM7.55556 0H0V9.44444H7.55556V0ZM17 7.55556H9.44444V17H17V7.55556ZM7.55556 11.3333H0V17H7.55556V11.3333Z"
        fill={isLinkActive ? "#a449eb" : "white"}
      />
    </svg>
  );
};

export default DashboardIcon;
