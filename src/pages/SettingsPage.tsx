import React, { useState } from 'react';
import './SettingsPage.css';

interface SettingsPageProps {
  isDarkMode: boolean;
  onThemeToggle: () => void;
}

const SettingsPage: React.FC<SettingsPageProps> = ({ isDarkMode, onThemeToggle }) => {
  const [settings, setSettings] = useState({
    email: 'user@example.com',
    phone: '09xx-xxx-xxxx',
    notifications: true,
    newsletter: false,
    language: 'English',
  });

  const handleToggle = (key: keyof typeof settings) => {
    setSettings((prev) => ({
      ...prev,
      [key]: typeof prev[key] === 'boolean' ? !prev[key] : prev[key],
    }));
  };

  const handleSave = () => {
    localStorage.setItem('userSettings', JSON.stringify(settings));
    alert('Settings saved successfully!');
  };

  return (
    <div className="settings-page">
      <div className="container">
        <h1 className="page-title">Settings</h1>

        <div className="settings-container">
          {/* Account Settings */}
          <section className="settings-section">
            <h2 className="section-title">Account</h2>
            <div className="settings-item">
              <div className="item-label">
                <h3>Email Address</h3>
                <p>Your login email</p>
              </div>
              <input
                type="email"
                value={settings.email}
                readOnly
                className="settings-input"
              />
            </div>
            <div className="settings-item">
              <div className="item-label">
                <h3>Phone Number</h3>
                <p>Contact number for orders</p>
              </div>
              <input
                type="tel"
                value={settings.phone}
                readOnly
                className="settings-input"
              />
            </div>
          </section>

          {/* Appearance */}
          <section className="settings-section">
            <h2 className="section-title">Appearance</h2>
            <div className="settings-item">
              <div className="item-label">
                <h3>Dark Mode</h3>
                <p>Switch between light and dark theme</p>
              </div>
              <button
                className={`toggle-btn ${isDarkMode ? 'active' : ''}`}
                onClick={onThemeToggle}
              >
                <span className="toggle-circle" />
              </button>
            </div>
          </section>

          {/* Notifications */}
          <section className="settings-section">
            <h2 className="section-title">Notifications</h2>
            <div className="settings-item">
              <div className="item-label">
                <h3>Order Notifications</h3>
                <p>Get updates about your orders</p>
              </div>
              <button
                className={`toggle-btn ${settings.notifications ? 'active' : ''}`}
                onClick={() => handleToggle('notifications')}
              >
                <span className="toggle-circle" />
              </button>
            </div>
            <div className="settings-item">
              <div className="item-label">
                <h3>Newsletter</h3>
                <p>Receive email updates and promotions</p>
              </div>
              <button
                className={`toggle-btn ${settings.newsletter ? 'active' : ''}`}
                onClick={() => handleToggle('newsletter')}
              >
                <span className="toggle-circle" />
              </button>
            </div>
          </section>

          {/* Language */}
          <section className="settings-section">
            <h2 className="section-title">Language</h2>
            <div className="settings-item">
              <div className="item-label">
                <h3>Preferred Language</h3>
                <p>Choose your display language</p>
              </div>
              <select className="settings-select" value={settings.language}>
                <option>English</option>
                <option>Filipino</option>
                <option>Spanish</option>
              </select>
            </div>
          </section>

          {/* Privacy */}
          <section className="settings-section">
            <h2 className="section-title">Privacy & Security</h2>
            <div className="settings-item">
              <div className="item-label">
                <h3>Privacy Policy</h3>
                <p>Read our privacy policy</p>
              </div>
              <button className="link-btn">View Policy →</button>
            </div>
            <div className="settings-item">
              <div className="item-label">
                <h3>Terms of Service</h3>
                <p>Read our terms and conditions</p>
              </div>
              <button className="link-btn">View Terms →</button>
            </div>
          </section>

          {/* General */}
          <section className="settings-section">
            <h2 className="section-title">General</h2>
            <div className="settings-item">
              <div className="item-label">
                <h3>About cLink</h3>
                <p>Learn more about our platform</p>
              </div>
              <button className="link-btn">Learn More →</button>
            </div>
            <div className="settings-item">
              <div className="item-label">
                <h3>Help & Support</h3>
                <p>Get help with cLink</p>
              </div>
              <button className="link-btn">Get Help →</button>
            </div>
          </section>

          {/* Save Button */}
          <div className="settings-footer">
            <button className="btn-save" onClick={handleSave}>
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
