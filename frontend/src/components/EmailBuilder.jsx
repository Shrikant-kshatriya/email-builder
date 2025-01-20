import React, { useState, useEffect } from 'react';
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import axios from "axios";
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Audio } from 'react-loader-spinner';

const EmailBuilder = () => {
    const { templateId } = useParams();
    const [sections, setSections] = useState();
    const [selectedSection, setSelectedSection] = useState(null);
    const [loading, setLoading] = useState(false);
    const [logoFile, setLogoFile] = useState(null);
    const [heroImageFile, setHeroImageFile] = useState(null);

    const fontSizeOptions = {
        xs: '12px',
        sm: '14px',
        md: '16px',
        lg: '18px',
        xl: '24px'
    };

    const fetchTemplate = async () => {
        try {
            setLoading(true);
            const res = await axios.get(`/template/${templateId}`);
            setSections(res.data.template);
            setSelectedSection(res.data.template[0]);
        } catch (error) {
            toast.error('Error fetching template');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTemplate();
    }, [templateId]);

    const handleSectionChange = (id, field, value) => {
        setSections((prevSections) =>
            prevSections.map((section) =>
                section.id === id ? { ...section, [field]: value } : section
            )
        );
        setSelectedSection((prev) => ({ ...prev, [field]: value }));
    };

    const handleStyleChange = (id, styleField, value) => {
        setSections((prevSections) =>
            prevSections.map((section) =>
                section.id === id
                    ? { ...section, style: { ...section.style, [styleField]: value } }
                    : section
            )
        );
        setSelectedSection((prev) => ({
            ...prev,
            style: { ...prev.style, [styleField]: value }
        }));
    };

    const moveSection = (direction) => {
        const index = sections.findIndex(section => section.id === selectedSection.id);
        if (index === -1) return;
    
        const newSections = [...sections];
        const [movedSection] = newSections.splice(index, 1);
    
        if (direction === 'up') {
            const newIndex = index - 1;
            if (newIndex >= 0) {
                newSections.splice(newIndex, 0, movedSection);
            } else {
                newSections.splice(index, 0, movedSection);
            }
        } else {
            const newIndex = index + 1;
            if (newIndex >= newSections.length) {
                newSections.push(movedSection);
            } else {
                newSections.splice(newIndex, 0, movedSection);
            }
        }
    
        setSections(newSections);
    };

    const renderSection = (section) => {
        const baseStyle = {
            border: selectedSection?.id === section.id && section.type !== 'divider' ? '4px solid #007BFF' : 'none',
            cursor: 'pointer',
            padding: section.type !== 'divider' ? '8px' : '0',
            textAlign: section.type !== 'divider' ? 'center' : 'initial'
        };

        return (
            <div
                key={section.id}
                onClick={() => setSelectedSection(section)}
                style={baseStyle}
                className={section.type !== 'divider' ? "lg:p-4" : ""}
            >
                {section.type === 'text' && <p style={section.style}>{section.content}</p>}
                {section.type === 'image' && section.content && (
                    <img src={section.content} alt="Email Section" style={section.style} className="w-full h-auto" />
                )}
                {section.type === 'button' && section.content && (
                    <div style={{ textAlign: 'center' }}>
                        <a href={section.href} style={{ ...section.style, textDecoration: 'none', display: 'inline-block' }}>
                            {section.content}
                        </a>
                    </div>
                )}
                {section.type === 'divider' && (
                    <div style={section.style}></div>
                )}
            </div>
        );
    };

    const handleLogoUpload = (event) => {
        setLogoFile(event.target.files[0]);
    };

    const handleHeroImageUpload = (event) => {
        setHeroImageFile(event.target.files[0]);
    };

    const validateTemplate = () => {
        if (templateId === '3') {
          if (!logoFile) {
            toast.error('Logo image is required', {position: 'top-left'});
            return false;
          }
          if (!heroImageFile) {
            toast.error('Hero image is required', {position: 'top-left'});
            return false;
          }
          return true;
        }
        
        if (!heroImageFile) {
          toast.error('Hero image is required', {position: 'top-left'});
          return false;
        }
        
        return true;
      };

    const handleGenerateTemplate = async () => {
        if(validateTemplate()){

            try {
              setLoading(true);
          
              const formData = new FormData();
              formData.append('logo', logoFile);
              formData.append('heroImage', heroImageFile);
              formData.append('sections', JSON.stringify(sections));
          
              console.log(formData);
          
              const res = await axios.post(`/upload`, formData, {
                headers: {
                  'Content-Type': 'multipart/form-data',
                },
                responseType: 'blob', 
              });
    
              const blob = res.data;
              const url = window.URL.createObjectURL(blob);
              const link = document.createElement('a');
              link.href = url;
              link.download = 'emailTemplate.html'; 
              link.click();
    
              toast.success('Email template generated successfully', { position: 'top-left' });
            } catch (error) {
              toast.error('Failed to generate email template', {position: 'top-left'});
            } finally {
              setLoading(false);
            }
        }
      };
      

    return (
        <div className="flex-grow w-screen flex items-center justify-center bg-gradient-to-r from-green-500 to-teal-500">
            <div className="max-w-4xl lg:max-w-5xl h-[80vh] lg:h-[75vh] mx-auto p-4 lg:p-3 bg-white shadow-2xl rounded-lg flex">
                <div className="w-2/3 p-3 bg-white rounded-lg shadow-lg h-full overflow-auto">
                    <h2 className="text-lg lg:text-xl font-bold mb-4 text-green-700">Email Template Preview</h2>
                    <div className="bg-[#f0ebff] p-2 lg:p-3 rounded-lg shadow-inner">
                        {sections?.map((section) => renderSection(section))}
                    </div>
                </div>
                <div className="w-1/3 p-3 ml-3 bg-gray-100 rounded-lg shadow-lg h-full overflow-auto">
                    {selectedSection && (
                        <div>
                            <h3 className="text-lg lg:text-xl font-bold mb-3 text-green-700">Edit Section Properties</h3>
                            {selectedSection.type !== 'divider' && (
                                <>
                                    <div className="mb-3">
                                        <label className="block font-medium text-green-600">Content:</label>
                                        {selectedSection.type === 'text' || selectedSection.type === 'button' ? (
                                            <textarea
                                                value={selectedSection.content}
                                                onChange={(e) => handleSectionChange(selectedSection.id, 'content', e.target.value)}
                                                className="border rounded-lg p-2 w-full h-20 focus:ring-2 focus:ring-green-400"
                                            />
                                        ) : (
                                            <input
                                                type="file"
                                                onChange={(e) => {
                                                    handleSectionChange(
                                                        selectedSection.id,
                                                        'content',
                                                        URL.createObjectURL(e.target.files[0])
                                                    );
                                                    if (selectedSection.id !== 'logo') {
                                                        handleHeroImageUpload(e);
                                                    } else {
                                                        handleLogoUpload(e);
                                                    }
                                                }
                                                }
                                                className="border rounded-lg p-2 focus:ring-2 focus:ring-green-400"
                                            />
                                        )}
                                    </div>
                                </>
                            )}
                            {selectedSection.type === 'text' && (
                                <>
                                    <div className="mb-3">
                                        <label className="block font-medium text-green-600">Font Size:</label>
                                        <div className="flex space-x-2">
                                            {Object.entries(fontSizeOptions).map(([key, value]) => (
                                                <button
                                                    key={key}
                                                    onClick={() => handleStyleChange(selectedSection.id, 'fontSize', value)}
                                                    className={`py-1 px-3 rounded-lg border focus:outline-none focus:ring-2 ${selectedSection.style.fontSize === value
                                                        ? 'bg-green-500 text-white border-green-500'
                                                        : 'bg-white text-green-600 border-gray-300 hover:bg-green-100'
                                                        }`}
                                                >
                                                    {key.toUpperCase()}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label className="block font-medium text-green-600">Text Color:</label>
                                        <div className="flex items-center">
                                            <input
                                                type="color"
                                                value={selectedSection.style.color}
                                                onChange={(e) => handleStyleChange(selectedSection.id, 'color', e.target.value)}
                                                className="rounded-lg p-2 focus:ring-2 focus:ring-green-400"
                                                style={{ backgroundColor: selectedSection.style.color }}
                                            />
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label className="block font-medium text-green-600">Text Alignment:</label>
                                        <select
                                            value={selectedSection.style.textAlign}
                                            onChange={(e) => handleStyleChange(selectedSection.id, 'textAlign', e.target.value)}
                                            className="border rounded-lg p-2 focus:ring-2 focus:ring-green-400"
                                        >
                                            <option value="left">Left</option>
                                            <option value="center">Center</option>
                                            <option value="right">Right</option>
                                        </select>
                                    </div>
                                </>
                            )}
                            {selectedSection.type === 'button' && (
                                <>
                                    <div className="mb-3">
                                        <label className="block font-medium text-green-600">Button Background:</label>
                                        <input
                                            type="color"
                                            value={selectedSection.style.backgroundColor}
                                            onChange={(e) => handleStyleChange(selectedSection.id, 'backgroundColor', e.target.value)}
                                            className="rounded-lg p-2 focus:ring-2 focus:ring-green-400"
                                            style={{ backgroundColor: selectedSection.style.backgroundColor }}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="block font-medium text-green-600">Button Text Color:</label>
                                        <input
                                            type="color"
                                            value={selectedSection.style.color}
                                            onChange={(e) => handleStyleChange(selectedSection.id, 'color', e.target.value)}
                                            className="rounded-lg p-2 focus:ring-2 focus:ring-green-400"
                                            style={{ backgroundColor: selectedSection.style.color }}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="block font-medium text-green-600">Border Radius:</label>
                                        <input
                                            type="text"
                                            value={selectedSection.style.borderRadius}
                                            onChange={(e) => handleStyleChange(selectedSection.id, 'borderRadius', e.target.value)}
                                            className="border rounded-lg p-2 focus:ring-2 focus:ring-green-400"
                                        />
                                    </div>
                                </>
                            )}
                        </div>
                    )}

                    <div className="mt-5">
                        <div className="mt-5 flex justify-between space-x-4">
                            <button
                                onClick={() => moveSection('up')}
                                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                            >
                                <FaArrowUp />
                            </button>
                            <button
                                onClick={() => moveSection('down')}
                                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                            >
                                <FaArrowDown />
                            </button>
                        </div>

                    </div>
                </div>
            </div>
                        <div className="absolute top-16 right-5 mt-5 flex justify-between space-x-4">
                            <button
                                onClick={handleGenerateTemplate}
                                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                            >
                                {loading ? <Audio width="24" color="white" /> : 'Generate HTML'}
                            </button>
                        </div>
            <ToastContainer />
        </div>
    );
};

export default EmailBuilder;
