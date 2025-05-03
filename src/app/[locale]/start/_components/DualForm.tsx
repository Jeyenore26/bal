/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Plus, X } from "lucide-react";

const SKILL_OPTIONS = [
  { value: "LeetCode", label: "LeetCode" },
  { value: "CodeWars", label: "CodeWars" },
  { value: "HackTheBox", label: "Hack The Box" },
  { value: "Kaggle", label: "Kaggle" },
  { value: "SkillshareProjects", label: "Skillshare Projects" },
  { value: "FrontendMentor", label: "FrontendMentor" },
];

const ROLE_OPTIONS = [
  { value: "Frontend", label: "Frontend" },
  { value: "Backend", label: "Backend" },
  { value: "Fullstack", label: "FullStack" },
  { value: "Designing", label: "UI/UX Designing" },
  { value: "VideoEditing", label: "Video Editing" },
  { value: "EthicalHacking", label: "Ethical Hacking" },
];

export default function DualForm() {
  const [activeTab, setActiveTab] = useState<"freelancer" | "company">(
    "freelancer",
  );
  const [role, setRole] = useState("");
  const [skills, setSkills] = useState<
    Array<{
      id: string;
      skill: string;
      score: string;
    }>
  >([{ id: Date.now().toString(), skill: "", score: "" }]);
  const [githubUsername, setGithubUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [apiResponse, setApiResponse] = useState("");

  const availableSkills = SKILL_OPTIONS.filter(
    (option) => !skills.some((s) => s.skill === option.value),
  );

  const addSkill = () => {
    if (availableSkills.length > 0) {
      setSkills([
        ...skills,
        { id: Date.now().toString(), skill: "", score: "" },
      ]);
    }
  };

  const removeSkill = (id: string) => {
    if (skills.length > 1) {
      setSkills(skills.filter((skill) => skill.id !== id));
    }
  };

  const updateSkill = (id: string, field: "skill" | "score", value: string) => {
    setSkills(
      skills.map((skill) =>
        skill.id === id ? { ...skill, [field]: value } : skill,
      ),
    );
  };

  const handleFreelancerSubmit = async () => {
    if (!githubUsername) {
      alert("Please enter your GitHub username");
      return;
    }

    setIsLoading(true);
    try {
      // Replace with actual DeepSeek API endpoint and your API key
      const response = await fetch(
        "https://api.deepseek.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer 69b9f21373c54e9796bb0cf5971a3f79`, // Replace with your actual API key
          },
          body: JSON.stringify({
            model: "deepseek-chat",
            messages: [
              {
                role: "user",
                content: `Search for GitHub profile information for username: ${githubUsername}. Provide a summary of their repositories, activity, and any notable projects.`,
              },
            ],
            temperature: 0.7,
          }),
        },
      );

      const data = await response.json();
      setApiResponse(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        data.choices[0]?.message?.content || "No response from API",
      );

      // Here you would typically process the response and maybe display it
      console.log("DeepSeek API response:", data);
      alert(
        `GitHub search results for ${githubUsername}:\n${data.choices[0]?.message?.content}`,
      );
    } catch (error) {
      console.error("Error calling DeepSeek API:", error);
      alert("Failed to search GitHub profile. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#ECE5DF] p-4">
      <Card className="w-full max-w-md rounded-xl bg-white p-6 shadow-lg">
        <div className="mb-6 flex space-x-4">
          <Button
            variant={activeTab === "freelancer" ? "default" : "outline"}
            className={`w-full ${activeTab === "freelancer" ? "bg-[#2d5b53] text-white" : "text-[#2d5b53]"}`}
            onClick={() => setActiveTab("freelancer")}
          >
            Freelancer
          </Button>
          <Button
            variant={activeTab === "company" ? "default" : "outline"}
            className={`w-full ${activeTab === "company" ? "bg-[#2d5b53] text-white" : "text-[#2d5b53]"}`}
            onClick={() => setActiveTab("company")}
          >
            Company
          </Button>
        </div>

        {activeTab === "freelancer" ? (
          <div className="space-y-4">
            <h2 className="text-center text-xl font-bold text-[#2d5b53]">
              Freelancer Information
            </h2>
            <Input placeholder="Full Name" className="border-gray-300" />
            <Input
              placeholder="Phone Number"
              type="tel"
              className="border-gray-300"
            />
            <Input
              placeholder="Email"
              type="email"
              className="border-gray-300"
            />
            <Input
              placeholder="GitHub Username"
              className="border-gray-300"
              value={githubUsername}
              onChange={(e) => setGithubUsername(e.target.value)}
            />

            <Select value={role} onValueChange={setRole}>
              <SelectTrigger className="border-gray-300">
                <SelectValue placeholder="Select your Job" />
              </SelectTrigger>
              <SelectContent>
                {ROLE_OPTIONS.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Input
              placeholder="Best Project Description"
              className="border-gray-300"
            />

            <div className="space-y-4">
              <h3 className="text-sm font-medium text-[#2d5b53]">
                Skills & Proficiencies
              </h3>
              {skills.map((skill) => (
                <div key={skill.id} className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Select
                      value={skill.skill}
                      onValueChange={(value) =>
                        updateSkill(skill.id, "skill", value)
                      }
                    >
                      <SelectTrigger className="flex-1 border-gray-300">
                        <SelectValue placeholder="Select a skill" />
                      </SelectTrigger>
                      <SelectContent>
                        {availableSkills
                          .concat(
                            skill.skill
                              ? SKILL_OPTIONS.filter(
                                  (o) => o.value === skill.skill,
                                )
                              : [],
                          )
                          .map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                      </SelectContent>
                    </Select>
                    {skills.length > 1 && (
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-red-500 hover:text-red-700"
                        onClick={() => removeSkill(skill.id)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                  {skill.skill && (
                    <Input
                      placeholder={`${SKILL_OPTIONS.find((o) => o.value === skill.skill)?.label} score`}
                      type="number"
                      min="1"
                      max="100"
                      value={skill.score}
                      onChange={(e) =>
                        updateSkill(skill.id, "score", e.target.value)
                      }
                      className="border-gray-300"
                    />
                  )}
                </div>
              ))}

              {availableSkills.length > 0 && (
                <Button
                  type="button"
                  variant="outline"
                  className="w-full text-[#2d5b53]"
                  onClick={addSkill}
                >
                  <Plus className="mr-2 h-4 w-4" />
                  Add Another Skill
                </Button>
              )}
            </div>

            <Button
              className="mt-4 w-full bg-[#2d5b53] hover:bg-[#3a7a6f]"
              onClick={handleFreelancerSubmit}
              disabled={isLoading}
            >
              {isLoading ? "Searching GitHub..." : "Submit as Freelancer"}
            </Button>

            {apiResponse && (
              <div className="mt-4 rounded-md bg-gray-100 p-4">
                <h3 className="mb-2 font-medium text-[#2d5b53]">
                  GitHub Profile Summary:
                </h3>
                <p className="text-sm text-gray-700">{apiResponse}</p>
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-4">
            <h2 className="text-center text-xl font-bold text-[#2d5b53]">
              Company Information
            </h2>
            <Input placeholder="Company Name" className="border-gray-300" />
            <Input
              placeholder="Contact Number"
              type="tel"
              className="border-gray-300"
            />
            <Input
              placeholder="Email"
              type="email"
              className="border-gray-300"
            />
            <Input placeholder="Available Role" className="border-gray-300" />
            <Input
              placeholder="Medium Wage ($)"
              type="number"
              className="border-gray-300"
            />

            <Button className="mt-4 w-full bg-[#2d5b53] hover:bg-[#3a7a6f]">
              Submit as Company
            </Button>
          </div>
        )}
      </Card>
    </div>
  );
}
