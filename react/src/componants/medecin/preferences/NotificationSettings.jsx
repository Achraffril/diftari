import React, { useState } from 'react';

function NotificationSettings({ settings, onSave }) {
    const [formData, setFormData] = useState(settings);

    const handleChange = (e) => {
        const { name, checked } = e.target;
        setFormData({ ...formData, [name]: checked });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex items-center">
            <input
                type="checkbox"
                name="emailNotifications"
                checked={formData.emailNotifications}
                onChange={handleChange}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="emailNotifications" className="ml-2 block text-sm font-medium text-gray-700">
                Receive email notifications
            </label>
        </div>
        <div className="flex items-center">
            <input
                type="checkbox"
                name="smsNotifications"
                checked={formData.smsNotifications}
                onChange={handleChange}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="smsNotifications" className="ml-2 block text-sm font-medium text-gray-700">
                Receive SMS notifications
            </label>
        </div>
        <div>
            <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-lg text-white bg-secondary-color  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
                Save
            </button>
        </div>
    </form>
    );
}

export default NotificationSettings;
