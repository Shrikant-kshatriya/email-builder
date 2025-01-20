const templates = require('../templates.js');

const getTemplate = async (req, res) => {
    try {
        const templateId = req.params.id;
        // find the template from templates array where id matches
        const template = templates.find((temp) => {
            return temp.id === parseInt(templateId);
        });
        if (!template) {
            return res.status(404).json({ error: 'Template not found' });
        }
        res.status(200).json(template);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
}

const getAllTemplate = async (req, res) => {
    try {
        const temp = templates;
        res.status(200).json(temp);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = {
    getTemplate,
    getAllTemplate
};