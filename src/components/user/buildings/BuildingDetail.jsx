import QueueingStatus from "./QueueingStatus";

const BuildingDetail = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-4">
      <div className="lg:col-span-8 bg-white rounded-lg p-4 md:p-5">
        Building Details
      </div>
      <div className="lg:col-span-4">
        <QueueingStatus />
      </div>
    </section>
  );
};

export default BuildingDetail;
