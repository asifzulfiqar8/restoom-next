import Map from "./Map";

const Dashboard = () => {
  return (
    <section className=" grid grid-cols-1 xl:grid-cols-12  gap-4 ">
      <div className=" col-span-12 xl:col-span-8">
        <Map />
      </div>
      <div className=" col-span-12 xl:col-span-4">{/* <Alerts /> */}</div>
    </section>
  );
};

export default Dashboard;
