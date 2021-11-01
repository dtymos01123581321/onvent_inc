Coding challenge - Dmitry Tymoshyk

Role: Full stack developer
Tech stack: React, Redux, Express, MongoDB
Test duration: 1 week
Git Repo (required): Bitbucket, Github or Gitlab
Task: Build a web app that facilitates creating and displaying events.

Requirements:
1. All data collected through the form needs to be properly validated.

2. Endpoints should have validations

3. Data collected using the form or obtained from local storage must always be available at the application level. Redux will be used to transmit data to the store.

4. Using a UI framework (Material, Bootstrap, Semantic or similar) is mandatory.

5. After setting up the Git Repo (on any of the platforms mentioned above), provide “read”
   access to development@myonvent.com

6. The code must be pushed to a repository after each relevant step (Ex: project setup,
   routing done, local storage done, Redux done, UI framework done).

Instructions:
1. Build a ReactJS application that has the following routes:
	a. / (root)
	b. /manage-event

2. Accessing the /manage-event route will display a form that includes the following mandatory fields:
	a. Event name
	b. Location (string)
	c. Start date
	d. End date
	e. Submit button

3. Submitting the form will result in saving the collected info as a new entry in the data object stored in local storage.

4. Successful submission of the form will display a success message and redirect the user to / (root) route.

5. Accessing the / (root) route will list, in a table format, all events stored in local storage.
	Each table entry will need to list:
		a. Event name
		b. Location
		c. Start date
		d. End date
		e. Submitted at (format: yyyy-mm-dd hh:mm:ss)

6. Table entries on /(root) route need to be ordered by ‘Submitted at’. The most recent/latest event will be at the top.

7. On the / (root) route display a Delete button. Clicking the Delete button will clear out all events. User needs to be asked for confirmation before deleting the data. The Delete button will only be displayed when there is at least one event displayed.

8. Accessing the / (root) route when no events are available should display a proper message.

9. Replace local storage with a REST API implementation using Express and MongoDB

10. Add a new route: /register

11. Accessing the /register route will display a form that includes the following fields:
	a. Name
	b. Email
	c. Password
	d. Confirm Password
	e. Upload avatar image

12. Submitting the registration form will results in saving the new user in the database

13. Add a new route: /login with two mandatory input fields:
	a. Email
	b. Password

14. If the user successfully logged in, automatically redirect the user to the /manage-event route

15. Make the /manage-event route protected and allow only authenticated users to access this route and create an event

16. In the events table, display the avatar image (if exists) of the users that created the event

17. The Delete button from #7 should be visible and actionable only for the logged in users
    a. Each user should see the Delete button only for his/her own events

18. Add a new route: /logut
    a. Display a Logout button on this page
    b. When the user clicks the button, this will be logged out and automatically redirected to / (root)

19. Implement Documentation
    a. swagger, open api or postman collection (10-20% coverage)

20. Implement Unit or E2E tests (10-20% coverage)

21. Implement Cron Jobs to set an event as “closed” when end date passes

22. Multithreading & Encryption (in a separate worker thread, convert uploaded jpg or png image to base64 text, encrypt it and save to the disk)

23. Nice to have: Docker setup
