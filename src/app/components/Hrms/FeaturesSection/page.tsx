"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      title: "Recruitment & Onboarding",
      points: [
        "Post jobs and manage applications",
        "Schedule interviews with ease",
        "Paperless onboarding with digital document management",
      ],
    },
    {
      title: "Employee Management",
      points: [
        "Centralized employee database",
        "Real-time attendance and leave tracking",
        "Shift scheduling & remote workforce support",
      ],
    },
    {
      title: "Payroll & Compliance",
      points: [
        "Automated salary processing",
        "Tax and statutory compliance",
        "Error-free calculations every time",
      ],
    },
    {
      title: "Performance Management",
      points: [
        "Goal setting & performance reviews",
        "Employee feedback system",
        "Analytics-driven decision making",
      ],
    },
    {
      title: "Employee Self-Service",
      points: [
        "Employees can apply for leave, download payslips, and update profiles",
        "Managers get instant access to team updates",
      ],
    },
    {
      title: "Training & Development",
      points: [
        "Create and assign learning modules",
        "Track employee skill growth",
        "Boost retention with continuous learning",
      ],
    },
    {
      title: "Analytics & Insights",
      points: [
        "Customizable dashboards",
        "Predictive workforce analytics",
        "Identify trends to improve HR strategies",
      ],
    },
    {
      title: "Mobile Access",
      points: [
        "Access HRMS anywhere with mobile app",
        "Push notifications for approvals & updates",
        "Seamless experience across devices",
      ],
    },
  ];

  return (
    <div className="w-full py-20">
      <div className="max-w-screen mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-center text-gray-900 mb-12">
          Key Features of{" "}
          <span className="font-bold text-orange-500">Camlenio</span> HRMS
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 justify-center align-center">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              className="relative rounded-2xl p-[2px] bg-gray-700 shadow-xl"
            >
              <div className="h-full w-full rounded-2xl bg-gray-900/80 backdrop-blur-md p-6">
                <h3
                  className="text-2xl font-semibold text-orange-500 mb-4"
                >
                  {feature.title}
                </h3>
                <ul className="space-y-2">
                  {feature.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-orange-500 mt-1" />
                      <span className="text-gray-200">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
