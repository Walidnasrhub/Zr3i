# Zr3i Carbon Sequestration Platform - User Guide

**Website:** https://zr3i.manus.space  
**Purpose:** Pioneering carbon sequestration projects developer in the MEA region, connecting project developers with carbon buyers through a digital platform for monitoring, verification, and trading of verified carbon credits.  
**Access:** Public - Open to project developers, carbon buyers, and partners worldwide

---

## Powered by Manus

**Technology Stack:**
- **Frontend:** React 19 + TypeScript + Tailwind CSS 4 + Shadcn/UI components
- **Backend:** Express 4 + tRPC 11 for type-safe API procedures
- **Database:** MySQL/TiDB with Drizzle ORM for schema management
- **Authentication:** Manus OAuth with JWT session management
- **Deployment:** Auto-scaling infrastructure with global CDN for high availability

This platform combines cutting-edge web technologies with enterprise-grade security and scalability to deliver a seamless experience for carbon project management across the MEA region.

---

## Using Your Website

### 1. **Explore Services & Projects**

Start by visiting the **"Home"** page to understand Zr3i's mission. Then navigate to **"Services"** to explore offerings for both project developers and carbon buyers:

- **For Project Developers:** Click "Services" → Review "Sustainable Land Management Consulting," "Digital Monitoring & Verification (MRV)," and "Carbon Credit Issuance" options
- **For Carbon Buyers:** Click "Services" → Discover "High-Integrity Carbon Credits," "Custom Offsetting Strategies," and "Transparency & Traceability" solutions

### 2. **Calculate Your Carbon Potential**

Click "Discover Your Carbon Potential" on the home page or navigate to **"Landing"** page. Fill out the form with your project details:

1. Enter your "Name" and "Email" (required)
2. Provide your "Phone" and "Company" information (optional)
3. Select your inquiry type (e.g., "Carbon Potential Calculation")
4. Describe your project in the "Message" field
5. Click "Calculate Potential" to submit

You'll receive a confirmation message, and the Zr3i team will contact you with a detailed assessment.

### 3. **Learn About Technology & Impact**

- **"Technology"** page: Discover satellite monitoring, AI-powered analysis, MRV processes, and the digital platform features
- **"Impact"** page: View case studies from Egypt, Saudi Arabia, and Morocco with measurable outcomes (carbon sequestered, farmers supported, income generated)

### 4. **Get to Know the Team**

Visit the **"About Us"** page to learn about Zr3i's mission, vision, core values, team members, and partnerships with organizations like FAO and Rabobank.

### 5. **Contact the Team**

Click **"Contact"** in the navigation menu. Fill out the contact form with your inquiry:

1. Enter your "Name" and "Email" (required)
2. Add your "Phone" and "Company" (optional)
3. Select your "Inquiry Type" (General, Project Developer, Carbon Buyer, Partnership, Other)
4. Write your "Message" (minimum 10 characters)
5. Click "Send Message"

The team will respond within 24 business hours.

### 6. **Switch Language**

Click the **"EN"** or **"AR"** button in the top-right corner to toggle between English and Arabic. The entire website, including navigation, forms, and content, will switch to your preferred language with full RTL (right-to-left) support for Arabic.

---

## Managing Your Website

### Settings & Configuration

Access the **Management UI** (right panel) to manage your website:

- **Settings Panel:** Update website title, logo, visibility settings, and domain configuration
- **Secrets Panel:** Manage API keys and environment variables for integrations
- **Database Panel:** View and manage contact inquiries and project submissions
- **Dashboard:** Monitor website analytics, traffic, and user engagement

### Handling Contact Submissions

All contact form submissions are automatically saved to the database and can be reviewed in the **Database Panel** under the Management UI. Each submission includes:

- Submitter name, email, phone, and company
- Inquiry type and message content
- Timestamp of submission
- Status (new, reviewed, responded)

### Monitoring Form Submissions

The Landing page and Contact page forms feed into your database. Use the **Database Panel** to:

1. View all incoming inquiries in real-time
2. Filter by inquiry type (carbon potential, general, partnership, etc.)
3. Export submission data for analysis
4. Track response status and follow-ups

---

## Next Steps

**Talk to Manus AI anytime to request changes or add features.** Whether you need to:

- Add new pages or sections
- Modify content or translations
- Integrate additional services or APIs
- Enhance the carbon calculator
- Add team member profiles
- Implement email notifications for form submissions

Simply ask, and the platform will be updated accordingly.

**Start connecting with project developers and carbon buyers today.** Use the "Calculate Potential" button on the home page to begin attracting projects, or reach out through the Contact page to discuss partnership opportunities with Zr3i.

---

## Production Readiness

The website is ready for production use. Before going live with custom integrations:

- **Email Notifications:** Currently set to manual review. To enable automatic email notifications when forms are submitted, contact support to configure SMTP settings.
- **Payment Integration:** If you plan to monetize carbon credits directly through the platform, additional payment gateway integration will be required.
- **API Integrations:** The platform supports integration with external carbon credit marketplaces and verification standards (Gold Standard, Verra, etc.).

For questions or to enable additional features, reach out to the Manus support team.
