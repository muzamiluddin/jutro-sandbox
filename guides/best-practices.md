The user interface of the Workplace Safety and Insurance Board (WSIB) system is designed to facilitate interactions between users (both internal staff and external customers) and the WSIB platform. It typically includes UI elements such as menus, buttons, forms, and screens that allow users to access and input information related to workplace safety, insurance claims, benefits, and other relevant matters. Additionally, the WSIB UI may incorporate features for submitting documentation, tracking claims, communicating with WSIB representatives, and accessing resources and information to support users in managing workplace-related issues effectively. The interface aims to be intuitive and user-friendly, providing clear navigation and guidance to users as they navigate through various processes and tasks within the system.

 WSIB is currently utilizing Figma as the standard tool for User Interface design, which includes branding, theming, layouts, and other look & feel attributes delivered in the format of HTML fragments and CSS/SCSS properties by UI components as well as navigation specifications as the input for the user interface development.

6.1.1.	UI Design Principles
1.	Responsive – Left-aligned, mobile-first, mobile-friendly, one-column design. 
2.	Accessible - Inclusive design, contrast, screen reader support, personas, multi-lingual support, large targets, design for edge cases.
3.	Friendly - Don’t be evil. No ‘dark’ UX. No ‘addictive’ or manipulative design. No hidden fees, hidden features, etc. Make designs that are non-intrusive. Designs can guide, lead, and recommend but shouldn’t push or force.
4.	Simple - Make people’s lives better. Easier. Happier. Faster. Simpler. Clarity in language, designs, products, and services should add value to people. Save time. Avoid jargon. Use plain language. Reduce delays.
5.	Control - Users need to keep the control and decision. Designing flows to feel smooth, seamless, intuitive, and painless. (A vs B should be equally weighted for choices). Do not apply to Continue vs Cancel, etc. Give users control, but don’t force them to make the decisions if they don’t want to. Great decisions are difficult.
6.	Consistent - Components, settings must be predictable and reliable. Otherwise, the experience feels disjointed, confusing and uncomfortable. People will question whether they’ve misunderstood the intended meaning or missed a key cue. Consistency implies stability, and people always want to feel secure.
7.	Intuitive - Subtle. Seamless. Intuitive. Efficient. If we design our products well enough, it will be so quick / easy / painless that users won’t even notice. Remove complexity. Stay out of people’s way. Give breadcrumbs. Provide context. This might include default values (checkbox / radio button) if it is useful, saves time, and doesn’t misdirect users / allow them to miss Terms and Conditions.
8.	Visual Hierarchy - Make sure users are drawn to the most important elements. Group related objects. Use layout and space to guide and inform readers.
9.	Prevent error - People make mistakes. Help prevent errors with good, short, simple instructions. Provide useful error messages. Make it easy to fix, edit, and undo mistakes. Provide feedback.
10.	Useful & Valuable - People would typically rather use a wonky shovel to dig a hole than bare their hands. Of course, we want to create good shovels, but regardless we want to make tools, services, and products that are useful for the user.
11.	Automate - If we can have the system automatically pump out a yearly form and send it to the user, then that’s better than forcing the user to come in and enter the details themselves. Or we can at least send them reminders, etc. If the process needs to be manual (for now / in the meantime).
12.	Emotion - We are human beings designing for real people. Being compassionate and empathetic is essential to our roles. We need to listen to the users, put ourselves in their shoes, and act as advocates for the people that depend on us. Designing for as many people (and their needs) as possible. Striving to act as allies and advocates for all the people that depend on us for our services

6.1.2.	Page Layout
A Page Layout Definition provides header, footer, navigation panel, and content area structure of individual pages within a digital application. To promote a better user experience, page layout should be consistent across pages within the same digital application. Therefore, one or a few Page Layout Definitions should be defined to be referenced by each individual page.


 Guidewire Digital Application Development Standardss

In Guidewire Digital Application development that leverages Guidewire Jutro Development Platform (JDP), a floorplan wraps each individual page with the same header, footer, navigation panel, and content area structure. Each page manages its own layout within the content area space created by the floorplan. A floorplan uses these properties to define various parts of the page.
•	Routes: is the routing metadata object used for the SubHeader.
•	subRoutes: is the routing metadata object used for left-navigation.
•	Header: is the property for the Application Header.
•	Footer: is the footer object.
•	right Side: is the right panel config object.
•	Content area: is defined in each page, not in the floorplan.
Although in most cases a single floorplan is used in a Guidewire Digital application, multiple floorplans might be needed to serve different page layout design needs in other cases. An effort should be put in to limit the number of floorplans utilized within a single Guidewire Digital application to maintain the UI consistency.
When multiple floorplans are used, typically a main/default floorplan is specified/defined to most pages, other floorplans override the main/default floorplan for specific pages.

Particularly, the Jutro global header is a common component to all Jutro application floorplans. It is preferred to configure Jutro global header to satisfy the application UI design requirements, such as changing logo image and/or text, enabling/disabling Jutro global header components.
However, a custom header can be created if the design is significantly different from the default application header, and the available configuration options are not sufficient. The following process should be followed for creating a custom header:
1.	Create a new custom header component.
2.	Inject the custom header into a Jutro floorplan.
Special attention needs to be paid to creating custom headers, from the upgradability and accessibility perspectives.
It is recommended to use Jutro StoryBook as the reference and/or starting point for implementing floorplans in Guidewire Digital applications.
Styles, Grids & Content Templates
1)	Grid and Spacing - Grid and spacing provide the foundation for positioning elements and creating page layouts. Using a grid helps create a consistent flow and makes familiar, easy-to-use experiences.

 
8-point spacing grid

2)	Breakpoints - The website scales responsively based on the user’s screen size. We generally design for large and small breakpoints, including medium components and considerations as needed. If no medium design is provided, please refer to the small component.
Breakpoints: 
i.	Large – Personal Computer
 > 1024px screen width
The px value above is to be used as a guideline only.
Many devices will come in the market with different resolutions. The ideal breakpoint should be where the design looks terrible. Shift to a medium breakpoint when necessary.

ii.	Medium - Tablet 
Portrait: 600 – 767px
Landscape: 768 – 1024px
The px value above is to be used as a guideline only.
A portrait layout for a medium device could be similar to a smaller device landscape layout.
A landscape layout for a medium device could be same as a larger device layout.
Exceptions: iPad Pro could use desktop design since it has a bigger screen than other tablets.

iii.	Small - Phone
Portrait: < 414px wide 
Landscape: < 600px wide
The px value above is to be used as a guideline only.
A landscape layout for a smaller device could be similar to a medium device portrait layout.

3)	Mobile-First design - the digital experience uses a mobile-first design approach, optimizing the mobile experience where space is limited and attention spans are short. 
Mobile-first design ensures a seamless experience on the smallest device while allowing us to scale our designs up to larger devices.
