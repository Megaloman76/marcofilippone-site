"use client";

type Item = {
  control_id: string;
  asset_name: string;
  score: number;
  implementation_status: string;
  evidence_status: string;
  exposures: number;
};

export default function EffectivenessPreview() {
  const data: Item[] = [
    {
      control_id: "AC-01",
      asset_name: "Active Directory",
      score: 82,
      implementation_status: "implemented",
      evidence_status: "validated",
      exposures: 0,
    },
    {
      control_id: "AC-07",
      asset_name: "VPN Gateway",
      score: 61,
      implementation_status: "partial",
      evidence_status: "unreviewed",
      exposures: 2,
    },
    {
      control_id: "SI-04",
      asset_name: "SIEM Platform",
      score: 74,
      implementation_status: "implemented",
      evidence_status: "validated",
      exposures: 1,
    },
    {
      control_id: "IR-01",
      asset_name: "Incident Process",
      score: 48,
      implementation_status: "planned",
      evidence_status: "missing",
      exposures: 3,
    },
  ];

  const getColor = (score: number) => {
    if (score > 75) return "text-green-400";
    if (score > 50) return "text-yellow-400";
    return "text-red-400";
  };

  return (
    <div className="bg-[#121316] border border-gray-800 rounded-2xl overflow-hidden shadow-xl shadow-black/20">
      <table className="w-full text-sm">
        <thead className="bg-[#0F1012] text-gray-400">
          <tr>
            <th className="text-left p-4">Control</th>
            <th className="text-left p-4">Asset</th>
            <th className="text-left p-4">Score</th>
            <th className="text-left p-4">Implementation</th>
            <th className="text-left p-4">Evidence</th>
            <th className="text-left p-4">Exposure</th>
          </tr>
        </thead>

        <tbody>
          {data.map((row) => (
            <tr key={row.control_id} className="border-t border-gray-800 hover:bg-[#16181c] transition">
              <td className="p-4 font-medium">{row.control_id}</td>
              <td className="p-4 text-gray-300">{row.asset_name}</td>
              <td className={`p-4 font-semibold ${getColor(row.score)}`}>
                {row.score}
              </td>
              <td className="p-4 text-gray-400">{row.implementation_status}</td>
              <td className="p-4 text-gray-400">{row.evidence_status}</td>
              <td className="p-4 text-gray-400">{row.exposures}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}