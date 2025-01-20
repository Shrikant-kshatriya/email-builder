import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const TemplateList = () => {
  const [templates, setTemplates] = useState([]);
  const navigate = useNavigate();

  const fetchTemplates = async () => {
    try {
      const res = await axios.get('/template');
      setTemplates(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchTemplates();
  }, []);

  const handleSelectTemplate = (templateId) => {
    navigate(`/builder/${templateId}`);
  };

  return (
    <div className="p-6 min-h-screen bg-gradient-to-r from-blue-400 to-purple-500 text-white">
      <div className="sm:max-w-7xl max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Choose Your Template</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
          {templates.map((template) => (
            <div
              key={template.id}
              className="bg-white w-full max-w-xs text-black p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer flex flex-col items-center transform hover:scale-105"
              onClick={() => handleSelectTemplate(template.id)}
            >
              <img
                src={template.image}
                alt={template.name}
                className="rounded-lg w-full h-[300px] object-fill mb-4"
              />
              <h3 className="text-lg font-semibold text-center">{template.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TemplateList;
