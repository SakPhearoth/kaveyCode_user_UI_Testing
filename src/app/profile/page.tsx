// app/profile/page.tsx
"use client";

import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Card, CardContent } from "../../components/ui/card";
import { Label } from "../../components/ui/label";

export default function ProfilePage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    phone: "",
    dob: "",
  });

  const [avatar, setAvatar] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];

      // Validate file type
      const validTypes = ["image/jpeg", "image/png", "image/webp"];
      if (!validTypes.includes(file.type)) {
        alert("Only JPG, PNG, and WebP images are allowed.");
        return;
      }

      // Validate file size (max 5MB)
      const maxSize = 5 * 1024 * 1024; // 5MB
      if (file.size > maxSize) {
        alert("File size should not exceed 5MB.");
        return;
      }

      // If valid → set preview
      setAvatar(URL.createObjectURL(file));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
      {/* Title */}
      <h1 className="text-center text-2xl font-bold text-blue-700 dark:text-blue-400">
        Public Profile
      </h1>
      <p className="text-center text-gray-500 dark:text-gray-400 mb-8">
        Edit your personal information, profile picture, and password here.
      </p>

      <div className="grid lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {/* Left: Profile Picture */}
        <Card className="flex flex-col items-center justify-center py-6 dark:bg-gray-800">
          <img
            src={avatar || "images/placeholder-avatar.png"}
            alt="Profile Avatar"
            className="w-32 h-32 rounded-full border dark:border-gray-600 object-cover"
          />
          <h2 className="mt-4 font-semibold text-gray-900 dark:text-gray-100">
            Username
          </h2>
          {/* <p className="text-gray-500 dark:text-gray-400 text-sm">Subscriber</p> */}

          {/* Hidden file input */}
          <input
            type="file"
            id="avatarUpload"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
          />

          <div className="flex flex-col gap-3 mt-4 w-full px-8">
            <label htmlFor="avatarUpload">
              <Button
                className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
                asChild
              >
                <span>Change Profile</span>
              </Button>
            </label>
            <Button
              variant="destructive"
              onClick={() => setAvatar(null)} // reset avatar
            >
              Remove Profile
            </Button>
          </div>
        </Card>

        {/* Right: Form */}
        <Card className="lg:col-span-2 dark:bg-gray-800">
          <CardContent className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label className="dark:text-gray-200">First Name</Label>
                <Input
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="dark:bg-gray-700 dark:text-gray-100"
                />
              </div>
              <div>
                <Label className="dark:text-gray-200">Last Name</Label>
                <Input
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="dark:bg-gray-700 dark:text-gray-100"
                />
              </div>
              <div className="md:col-span-2">
                <Label className="dark:text-gray-200">Address</Label>
                <Input
                  name="address"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleChange}
                  className="dark:bg-gray-700 dark:text-gray-100"
                />
              </div>
              <div>
                <Label className="dark:text-gray-200">Phone Number</Label>
                <Input
                  name="phone"
                  placeholder="+855 xxx xxxx"
                  value={formData.phone}
                  onChange={handleChange}
                  className="dark:bg-gray-700 dark:text-gray-100"
                />
              </div>
              <div>
                <Label className="dark:text-gray-200">Date of Birth</Label>
                <Input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  className="dark:bg-gray-700 dark:text-gray-100"
                />
              </div>
            </div>

            <div className="flex justify-end gap-3">
              <Button variant="destructive">Cancel</Button>
              <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
                Save Changes
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Actions */}
      <Card className="max-w-5xl mx-auto mt-8 dark:bg-gray-800">
        <CardContent className="p-6 space-y-4">
          <div>
            <h3 className="text-red-600 font-medium">Delete Account</h3>
            <Button variant="destructive">Delete my account</Button>
          </div>
          <div>
            <h3 className="text-gray-700 dark:text-gray-200 font-medium">
              Password
            </h3>
            <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
              Reset my password
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
