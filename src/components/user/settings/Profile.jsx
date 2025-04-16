"use client";
import Button from "@/components/global/small/Button";
import Input from "@/components/global/small/Input";
import { useState } from "react";

const Profile = () => {
  // Initial profile state (replace defaults as needed)
  const [profile, setProfile] = useState({
    name: "John Doe",
    picture: "/images/default/profile.png",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    dob: "1990-01-01",
    nationality: "American",
  });

  // Boolean state that determines if the form is in edit mode
  const [isEditing, setIsEditing] = useState(false);

  // Store form changes in local state
  const [formData, setFormData] = useState({ ...profile });

  // Handle input change for controlled inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Toggle edit mode: If saving, update the main profile state
  const handleToggleEdit = () => {
    if (isEditing) {
      // Save the form data into profile
      setProfile(formData);
      // Simulate saving data (e.g. an API call) here as needed
      console.log("Saved profile:", formData);
    } else {
      // When entering edit mode, sync formData with current profile
      setFormData({ ...profile });
    }
    setIsEditing((prev) => !prev);
  };

  // A helper component to render the profile view field
  const ProfileField = ({ label, value }) => (
    <div className="mb-4">
      <label className="block text-gray-600 font-medium mb-1">{label}</label>
      <div className="text-gray-800">{value}</div>
    </div>
  );

  return (
    <div className="flex justify-center">
      <div className="w-full bg-white shadow rounded-xl p-6">
        <div className="flex flex-col items-center">
          <img
            src={profile.picture}
            alt={profile.name}
            className="w-32 h-32 rounded-full mb-4 object-cover shadow"
          />
          <h2 className="text-2xl font-bold mb-2">{profile.name}</h2>
        </div>

        <div className="mt-6">
          {isEditing ? (
            <form className="space-y-4">
              <Input
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <Input
                label="Profile Picture URL"
                name="picture"
                value={formData.picture}
                onChange={handleChange}
              />
              <Input
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
              <Input
                label="Phone Number"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
              />
              <Input
                label="Date of Birth"
                name="dob"
                type="date"
                value={formData.dob}
                onChange={handleChange}
              />
              <Input
                label="Nationality"
                name="nationality"
                value={formData.nationality}
                onChange={handleChange}
              />
            </form>
          ) : (
            <div className="space-y-4">
              <ProfileField label="Email" value={profile.email} />
              <ProfileField label="Phone Number" value={profile.phone} />
              <ProfileField label="Date of Birth" value={profile.dob} />
              <ProfileField label="Nationality" value={profile.nationality} />
            </div>
          )}
        </div>

        <div className="mt-6 flex justify-end">
          <Button
            onClick={handleToggleEdit}
            width="max-w-[130px]"
            text={isEditing ? "Save" : "Edit Profile"}
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
