import * as React from 'react';
import './contactPage.scss';
import Form from './form';

export default function ContactPage() {
  return (
    <div className="contact-page">
      <div className="card">
        <Form />
      </div>
    </div>
  );
}
