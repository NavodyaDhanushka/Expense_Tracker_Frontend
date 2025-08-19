const DashboardCard = ({ title, value }) => (
    <div className="bg-white shadow rounded p-4 w-full md:w-1/3">
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-2xl font-semibold">{value}</p>
    </div>
);

export default DashboardCard;
