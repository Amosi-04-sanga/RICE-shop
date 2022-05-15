import { TextField } from '@mui/material'
import Head from 'next/head'
import { useState } from 'react'
import Nav from '../components/Nav'
import styles from '../styles/home.module.css'
import formcss from '../styles/form.module.css'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


export default function Home() {

  const form = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })

  const submitHandle = async (e) => {
    e.preventDefault()

    console.log(form.current)

    emailjs.sendForm('service_beselx9', 'template_jgnujyu', form.current, 'iNh7Z2mMOdIUMd2Ie')
      .then((result) => {
        console.log(result.text);
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        })
      }, (error) => {
        console.log(error.text);
      });

  }

  return (
    <div >
      <Head>
        <title>Home page</title>
      </Head>
      < Nav />

      <header className={styles.header} >
        <div className={styles.overlay}>
          <h1 className={styles.heading} >wauzaji wa mchele jumla na rejareja</h1>
          <p className={styles.text} >pata mchele bora kutoka mbeya kwa bei nafuu. Tunapatikana Dar es salaam makumbusho na mbezi terminal wasiliana nasi kwa namba 0754465656</p>
        </div>
      </header>

      <main className={styles.mainSection} >

        <div className={styles.services}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M495.9 166.6C499.2 175.2 496.4 184.9 489.6 191.2L446.3 230.6C447.4 238.9 448 247.4 448 256C448 264.6 447.4 273.1 446.3 281.4L489.6 320.8C496.4 327.1 499.2 336.8 495.9 345.4C491.5 357.3 486.2 368.8 480.2 379.7L475.5 387.8C468.9 398.8 461.5 409.2 453.4 419.1C447.4 426.2 437.7 428.7 428.9 425.9L373.2 408.1C359.8 418.4 344.1 427 329.2 433.6L316.7 490.7C314.7 499.7 307.7 506.1 298.5 508.5C284.7 510.8 270.5 512 255.1 512C241.5 512 227.3 510.8 213.5 508.5C204.3 506.1 197.3 499.7 195.3 490.7L182.8 433.6C167 427 152.2 418.4 138.8 408.1L83.14 425.9C74.3 428.7 64.55 426.2 58.63 419.1C50.52 409.2 43.12 398.8 36.52 387.8L31.84 379.7C25.77 368.8 20.49 357.3 16.06 345.4C12.82 336.8 15.55 327.1 22.41 320.8L65.67 281.4C64.57 273.1 64 264.6 64 256C64 247.4 64.57 238.9 65.67 230.6L22.41 191.2C15.55 184.9 12.82 175.3 16.06 166.6C20.49 154.7 25.78 143.2 31.84 132.3L36.51 124.2C43.12 113.2 50.52 102.8 58.63 92.95C64.55 85.8 74.3 83.32 83.14 86.14L138.8 103.9C152.2 93.56 167 84.96 182.8 78.43L195.3 21.33C197.3 12.25 204.3 5.04 213.5 3.51C227.3 1.201 241.5 0 256 0C270.5 0 284.7 1.201 298.5 3.51C307.7 5.04 314.7 12.25 316.7 21.33L329.2 78.43C344.1 84.96 359.8 93.56 373.2 103.9L428.9 86.14C437.7 83.32 447.4 85.8 453.4 92.95C461.5 102.8 468.9 113.2 475.5 124.2L480.2 132.3C486.2 143.2 491.5 154.7 495.9 166.6V166.6zM256 336C300.2 336 336 300.2 336 255.1C336 211.8 300.2 175.1 256 175.1C211.8 175.1 176 211.8 176 255.1C176 300.2 211.8 336 256 336z" /></svg>
          <h2>Kuhusu Sisi</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque in voluptatem beatae cum numquam explicabo pariatur expedita. Eaque, atque quis.</p>
        </div>

        <div className={styles.services}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><path d="M160 448h-32V224c0-17.69-14.33-32-32-32L32 192c-17.67 0-32 14.31-32 32s14.33 31.1 32 31.1h32v192H32c-17.67 0-32 14.31-32 32s14.33 32 32 32h128c17.67 0 32-14.31 32-32S177.7 448 160 448zM96 128c26.51 0 48-21.49 48-48S122.5 32.01 96 32.01s-48 21.49-48 48S69.49 128 96 128z" /></svg>
          <h2>Huduma Zetu</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque in voluptatem beatae cum numquam explicabo pariatur expedita. Eaque, atque quis.</p>
        </div>

        <div className={styles.contacts}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M511.2 387l-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.969-27.2 24.22-30.45l100.8-23.25C139.7-2.602 154.7 5.018 160.8 18.92l46.52 108.5c5.438 12.78 1.77 27.67-8.98 36.45L144.5 207.1c33.98 69.22 90.26 125.5 159.5 159.5l44.08-53.8c8.688-10.78 23.69-14.51 36.47-8.975l108.5 46.51C506.1 357.2 514.6 372.4 511.2 387z" /></svg>
          <h2>mawasiliano</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque in voluptatem beatae cum numquam explicabo pariatur expedita. Eaque, atque quis.</p>
        </div>

        <div className={styles.emailContact}>
          <h4>wasiliana nasi kupitia email </h4>

          <div className={styles.formWrapper} >
            <p className={formcss.errorMsg} > { } </p>
            <div className={formcss.formWrapper}>
              <form ref={form} onSubmit={submitHandle} className={styles.form} autoCorrect="true" autoComplete="false" >
                <div className={formcss.row}>
                  <label className={formcss.label} htmlFor="email">Enter your name</label>
                  <TextField
                    required
                    id="text"
                    type="name"
                    label="name"
                    name='name'
                    placeholder='Enter name'
                    className={formcss.input}
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className={formcss.row}>
                  <label className={formcss.label} htmlFor="email">Enter your email</label>
                  <TextField
                    required
                    id="email"
                    type="email"
                    label="email"
                    name='email'
                    className={formcss.input}
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className={formcss.row}>
                  <label className={formcss.label} htmlFor="subject">Enter subject</label>
                  <TextField
                    required
                    id="text"
                    type="subject"
                    label="subject"
                    name='subject'
                    placeholder='Enter name'
                    className={formcss.input}
                    value={formData.subject}
                    onChange={e => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>

                <div className={formcss.row}>
                  <label className={form.label} htmlFor="message">Enter password</label>
                  <textarea
                    name="message"
                    className={formcss.message}
                    id="message"
                    cols="30"
                    rows="10"
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                  >
                  </textarea>
                </div>

                <button type='submit' className={formcss.button} >
                  SEND
                </button>

              </form>
            </div>
          </div>

        </div>


      </main>

      <footer className={styles.footer} >
        &#169;kyle 2022
      </footer>

    </div>
  )
}
