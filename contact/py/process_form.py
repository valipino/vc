from flask import Flask, request, redirect, render_template
from flask_mail import Mail, Message

app = Flask(__name__)

# Configure Flask-Mail
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = 'vali.pinocasso@gmail.com'
app.config['MAIL_PASSWORD'] = '13youtube22001'
app.config['MAIL_DEFAULT_SENDER'] = 'vali.pinocasso@gmail.com'
app.config['MAIL_DEBUG'] = True

mail = Mail(app)

@app.route('/submit_form', methods=['POST'])
def submit_form():
    if request.method == 'POST':
        name = request.form['name']
        company = request.form['company']
        country = request.form['country']
        subject = request.form['subject']

        to_email = "vali.pinocasso@gmail.com"
        email_subject = "New Contact Form Submission"
        email_message = f"Name: {name}\nCompany: {company}\nCountry: {country}\n\nSubject:\n{subject}"

        # Send the email using Flask-Mail
        message = Message(email_subject, recipients=[to_email])
        message.body = email_message
        mail.send(message)

        # Redirect to a thank you page or back to the main page
        return redirect('../contact/index.html')

if __name__ == '__main__':
    app.run(debug=True)
