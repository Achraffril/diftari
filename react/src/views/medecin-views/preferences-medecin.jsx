import React, { useState } from 'react';
import PreferencesHeader from '../../componants/medecin/preferences/PreferencesHeader';
import PasswordSettings from '../../componants/medecin/preferences/PasswordSettings';
import NotificationSettings from '../../componants/medecin/preferences/NotificationSettings';

function MedecinPreferences() {
    const initialDoctor = {
        name: "Dr. John Doe",
        title: "Cardiologist",
        email: "john.doe@example.com",
        phone: "+1234567890",
        specialties: ["Cardiology", "Internal Medicine"],
        image: "https://img.freepik.com/free-photo/portrait-male-health-worker_23-2148980804.jpg"
    };

    const [doctor, setDoctor] = useState(initialDoctor);
    const [notifications, setNotifications] = useState({
        emailNotifications: true,
        smsNotifications: false
    });

    const handlePasswordSave = (passwordData) => {
        // Handle password change logic
        alert('Password updated successfully!');
    };

    const handleNotificationSave = (updatedSettings) => {
        setNotifications(updatedSettings);
        alert('Notification settings updated successfully!');
    };

    return (
        <div className="container mx-auto p-6  min-h-screen">
            <PreferencesHeader doctor={doctor} />
            <div className="mt-10 flex flex-col md:flex-row gap-10">
                <section className="flex-1 bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-secondary-color mb-6">Password Settings</h2>
                    <PasswordSettings onSave={handlePasswordSave} />
                </section>
                <section className="flex-1 bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-secondary-color mb-6">Notification Settings</h2>
                    <NotificationSettings settings={notifications} onSave={handleNotificationSave} />
                </section>
                
            </div>
        </div>
    );
}

export default MedecinPreferences;
