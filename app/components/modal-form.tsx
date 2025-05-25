'use client';
import { useState } from 'react';
import styles from './modal.module.css';

interface Props {
  onClose: () => void;
}

export default function ModalForm({ onClose }: Props) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    question: '',
  });
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Ошибка сервера');
      setSuccess(true);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className={styles.overlay} role='dialog' aria-modal='true' id='modal'>
      <div className={styles.modalContent}>
        <button
          className={styles.closeBtn}
          onClick={onClose}
          aria-label='Закрыть'
        >
          ×
        </button>
        {!success ? (
          <form onSubmit={handleSubmit} className={styles.form}>
            <h3 className={styles.title}>Записаться на консультацию</h3>
            <label>
              <input
                name='name'
                placeholder='Введите Ваше имя'
                value={form.name}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              <input
                name='email'
                placeholder='Введите Ваш email'
                type='email'
                value={form.email}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              <input
                name='phone'
                placeholder='Введите Ваш телефон'
                type='tel'
                value={form.phone}
                onChange={handleChange}
                // required
              />
            </label>
            <label>
              <textarea
                name='question'
                placeholder='Опишите, что Вас волнует или задайте вопрос...'
                value={form.question}
                onChange={handleChange}
                rows={6}
                required
              />
            </label>
            {error && <p className={styles.error}>{error}</p>}
            <button
              type='submit'
              disabled={sending}
              className={styles.submitBtn}
            >
              {sending ? <p>{'Отправка...'}</p> : <p>{'Отправить'}</p>}
            </button>
          </form>
        ) : (
          <p className={styles.thanks}>
            Спасибо! Ваш запрос на консультацию получен.
          </p>
        )}
      </div>
    </div>
  );
}