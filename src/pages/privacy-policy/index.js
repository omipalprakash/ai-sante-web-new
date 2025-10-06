import Meta from "@/component/layout/meta";

const PrivacyPolicy = () => {
  return (
    <>
      <Meta
        title="Privacy Policy for MR Reporting System App | Ai Sante"
        description="Learn how Ai Sante's MR Reporting System App collects, uses, and protects your personal and device data under GDPR, CCPA, and App Store guidelines."
        keywords="Privacy Policy, MR Reporting System, Data Protection, GDPR, CCPA, Ai Sante"
      />
      <div className="bg-white">
        <div className="max-w-[1404px] mx-auto px-4 sm:px-6 md:px-8 py-12 text-gray-800 bg-[#f5f5f5]">
          <h1 className="text-4xl font-bold mb-10 text-center text-gray-700">
            Privacy Policy for MR Reporting System App
          </h1>

          <div className="mb-8 text-sm text-gray-500 ">
            <p>
              <strong>Effective Date:</strong> [Insert Date]
            </p>
            <p>
              <strong>Last Updated:</strong> [Insert Date]
            </p>
          </div>

          <div className="space-y-6 leading-relaxed">
            <p>
              Welcome to the <strong>MR Reporting System App</strong> ("the App").
              This privacy policy outlines how we collect, use, store, and protect
              the personal and device data of our users, particularly medical
              representatives ("you" or "user"), while ensuring compliance with
              applicable data privacy laws and platform policies, including the
              <strong>General Data Protection Regulation (GDPR)</strong>,
              <strong>California Consumer Privacy Act (CCPA)</strong>, and
              <strong>App Store guidelines</strong>.
            </p>

            <p>
              We value your privacy and are committed to maintaining the
              confidentiality and integrity of your information.
            </p>

            <h2 className="text-2xl font-semibold text-gray-700">
              1. Overview of the App’s Purpose
            </h2>
            <div className="pl-6">
              <p>
                The <strong>MR Reporting System App</strong> is designed to
                streamline the daily activities and performance tracking of
                medical representatives. It enables real-time visit logging,
                report submissions, geo-tagged attendance tracking, voice
                recording, and media uploads to improve operational efficiency and
                field transparency.
              </p>
              <br />
              <p>
                To function effectively, the app requires access to certain device
                features, including:
              </p>

              <ul className="list-disc list-inside pl-4 space-y-1">
                <li>
                  <strong>Microphone</strong>
                </li>
                <li>
                  <strong>Speaker</strong>
                </li>
                <li>
                  <strong>Location (GPS)</strong>
                </li>
                <li>
                  <strong>Camera</strong>
                </li>
              </ul>

              <p>
                We request only the data that is strictly necessary for the core
                functionality of the app and handle it with the highest level of
                care.
              </p>
            </div>
            <h2 className="text-2xl font-semibold text-gray-700 mt-10">
              2. Data We Collect
            </h2>

            {/* a. Microphone Access */}
            <div className="pl-6">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  a. Microphone Access
                </h3>
                <p>
                  <strong>Why we collect it:</strong>
                </p>
                We use the microphone to allow users to:
                <ul className="list-disc list-inside pl-4 mb-2">
                  <li>Record voice notes related to daily reporting</li>
                  <li>
                    Use voice-to-text functionality for hands-free reporting
                  </li>
                  <li>
                    Participate in in-app voice feedback or call recording (if
                    applicable)
                  </li>
                </ul>
                <p>
                  <strong>How it’s used:</strong> Audio data is only captured when
                  the user explicitly records a note or initiates a feature using
                  the microphone. We do not access or record audio in the
                  background. Audio is stored securely and only accessible to
                  authorized personnel (e.g., managers or auditors) within the
                  reporting framework.
                </p>
              </div>

              {/* b. Speaker Access */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  b. Speaker Access
                </h3>
                <p>
                  <strong>Why we collect it:</strong>
                </p>
                The speaker is used to:
                <ul className="list-disc list-inside pl-4 mb-2">
                  <li>Play back recorded audio notes</li>
                  <li>Enable two-way communication features</li>
                  <li>Deliver audio alerts and instructions within the app</li>
                </ul>
                <p>
                  <strong>How it’s used:</strong> No personal data is collected
                  through speaker use. It is simply utilized as an output channel
                  for app-generated audio and feedback playback.
                </p>
              </div>

              {/* c. Location (GPS) Data */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  c. Location (GPS) Data
                </h3>
                <p>
                  <strong>Why we collect it:</strong>
                </p>
                We collect real-time location data to:
                <ul className="list-disc list-inside pl-4 mb-2">
                  <li>Track and verify field visits</li>
                  <li>Generate time-stamped and geo-tagged reports</li>
                  <li>Improve accountability and scheduling efficiency</li>
                </ul>
                <p>
                  <strong>How it’s used:</strong> Location is accessed only during
                  active work sessions or when a report or visit is being logged.
                  Background tracking is minimized and fully transparent. We never
                  sell or share location data with third parties. Users can
                  control location access through their device settings.
                </p>
              </div>

              {/* d. Camera Access */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  d. Camera Access
                </h3>
                <p>
                  <strong>Why we collect it:</strong>
                </p>
                Camera access is required to:
                <ul className="list-disc list-inside pl-4 mb-2">
                  <li>
                    Capture images of visit sites, product displays, or documents
                  </li>
                  <li>Record videos for reporting or evidence submission</li>
                  <li>Scan barcodes, QR codes, or IDs (if applicable)</li>
                </ul>
                <p>
                  <strong>How it’s used:</strong> Images and videos are uploaded
                  only when you choose to submit them. We do not access the camera
                  in the background. Captured media is used strictly for internal
                  reporting and audit purposes, and is stored securely.
                </p>
              </div>

              {/* e. Device Information & App Usage */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  e. Device Information & App Usage
                </h3>
                <p>We also collect non-personal data such as:</p>
                <ul className="list-disc list-inside pl-4 mb-2">
                  <li>Device type and operating system</li>
                  <li>IP address</li>
                  <li>App crash logs and diagnostics</li>
                  <li>Usage analytics (e.g., time on screen, clicks)</li>
                </ul>
                <p>
                  <strong>Purpose:</strong> To improve app stability, fix bugs,
                  enhance features, and optimize performance across devices.
                </p>
              </div>
            </div>

            {/* 3. How We Use Your Data */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-700">
                3. How We Use Your Data
              </h2>
              <div className="pl-6">
                <p>
                  All collected data is used solely to deliver the core services
                  of the MR Reporting System App, including:
                </p>
                <ul className="list-disc list-inside pl-4 mt-2">
                  <li>Submitting daily work reports</li>
                  <li>
                    Verifying MR visits through geo-location and time stamps
                  </li>
                  <li>Uploading multimedia reports (photos/videos/audio)</li>
                  <li>Monitoring team performance and field productivity</li>
                  <li>Providing user support and technical troubleshooting</li>
                  <li>
                    Generating analytics and performance metrics for managers
                  </li>
                </ul>
              </div>
            </div>
            {/* 4. Data Sharing and Disclosure */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-700">
                4. Data Sharing and Disclosure
              </h2>
              <div className="pl-6">
                <p>
                  We take your privacy seriously. Your data is never sold or
                  rented. It may be shared only in the following cases:
                </p>
                <ul className="list-disc list-inside pl-4 mt-2">
                  <li>
                    <strong>Internally:</strong> With authorized supervisors or
                    administrators within your organization for performance
                    tracking and compliance purposes.
                  </li>
                  <li>
                    <strong>Third-party Service Providers:</strong> Only to
                    support infrastructure needs (e.g., secure cloud storage,
                    analytics), under strict confidentiality agreements.
                  </li>
                  <li>
                    <strong>Legal or Compliance Requests:</strong> When required
                    to comply with a valid legal process or regulatory
                    requirement.
                  </li>
                </ul>
              </div>
            </div>

            {/* 5. Data Storage and Security */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-700">
                5. Data Storage and Security
              </h2>
              <div className="pl-6">
                <p>
                  We use secure servers and follow best industry practices to
                  protect your data:
                </p>
                <ul className="list-disc list-inside pl-4 mt-2">
                  <li>Encrypted storage for media, voice, and location logs</li>
                  <li>Role-based access controls to limit who can view data</li>
                  <li>Routine security audits and software updates</li>
                  <li>No retention of unnecessary background data</li>
                </ul>
                Data is stored for only as long as necessary to fulfill reporting
                obligations or as required by law.
              </div>
            </div>
            {/* 6. Your Privacy Controls and Rights */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-700">
                6. Your Privacy Controls and Rights
              </h2>
              <div className="pl-6">
                <p>You can manage and control your data in several ways:</p>
                <ul className="list-disc list-inside pl-4 mt-2">
                  <li>
                    <strong>Permissions:</strong> You can revoke camera,
                    microphone, or location access at any time via your phone’s
                    app settings.
                  </li>
                  <li>
                    <strong>Data Access/Deletion:</strong> You may request a copy
                    of your personal data or request its deletion by contacting
                    our support team.
                  </li>
                  <li>
                    <strong>Consent:</strong> All sensitive permissions are
                    explicitly requested and explained within the app before
                    activation.
                  </li>
                </ul>
              </div>
            </div>

            {/* 7. Children’s Privacy */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-700">
                7. Children’s Privacy
              </h2>
              <div className="pl-6">
                <p>
                  The app is intended for use only by adult professionals. We do
                  not knowingly collect data from children under the age of 18. If
                  we become aware that a minor’s data has been collected
                  inadvertently, it will be deleted promptly.
                </p>
              </div>
            </div>

            {/* 8. Changes to This Policy */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-700">
                8. Changes to This Policy
              </h2>
              <div className="pl-6">
                <p>
                  We may update this Privacy Policy to reflect changes in
                  technology, law, or app features. We will notify users through
                  in-app alerts or email if any significant changes are made.
                </p>
              </div>
            </div>

            {/* 9. Contact Information */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-700">
                9. Contact Information
              </h2>
              <div className="pl-6">
                <p>
                  If you have questions, concerns, or requests regarding this
                  Privacy Policy or your data, please contact us:
                </p>
                <ul className="list-disc list-inside pl-4 mt-2">
                  <li>
                    <strong>Email:</strong> [Insert official support email]
                  </li>
                  <li>
                    <strong>Phone:</strong> [Insert customer support number]
                  </li>
                  <li>
                    <strong>Address:</strong> [Insert company or legal office
                    address]
                  </li>
                  <li>
                    <strong>Website:</strong> [Insert website URL, if available]
                  </li>
                </ul>
                <p className="mt-4">
                  By downloading and using the MR Reporting System App, you
                  acknowledge that you have read and understood this Privacy
                  Policy and agree to its terms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
