import React from "react";

const CertificateContainer = ({certificates}) => {
  return (
    <div className="w-full">
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 overflow-y-auto no-scrollbar"
        style={{
          maxHeight: "750px", // Approx height for 2 rows (adjust if needed)
        }}
      >
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="bg-[#161B22] border border-gray-600 rounded-lg p-4 flex flex-col shadow-lg transition-transform duration-300"
          >
            <div className="rounded-md w-full aspect-auto overflow-clip">
              {cert.type === "image" ? (
                <img
                  src={cert.file}
                  alt={`${cert.title} certificate`}
                  className="w-full object-cover"
                />
              ) : (
                <img
                  src={cert.thumbnail || "/thumbnails/default-pdf-thumb.png"}
                  alt={`${cert.title} PDF preview`}
                  className="w-full object-cover"
                />
              )}
            </div>

            <div className="mt-2 w-full flex flex-col items-start gap-y-1">
              <h3 className="text-lg font-semibold text-white">
                {cert.title}
              </h3>
              <div className="flex gap-x-2 items-center">
                <p className="text-sm text-gray-400">{cert.issuer}</p>
                <p className="text-sm text-gray-500">{cert.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificateContainer;
