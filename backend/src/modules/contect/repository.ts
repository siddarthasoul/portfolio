import { pool } from "../../core/db.js";

export interface CreateContactMessageInput {
  name: string;
  email: string;
  message: string;
}

export type ContactMessageStatus =
  | "unread"
  | "read"
  | "replied"
  | "archived";

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  status: ContactMessageStatus;
  created_at: Date;
}

class ContactRepository {
  async create(
    data: CreateContactMessageInput,
  ): Promise<Pick<ContactMessage, "id" | "created_at">> {
    const result = await pool.query<
      Pick<ContactMessage, "id" | "created_at">
    >(
      `
      INSERT INTO contact_messages (
        name,
        email,
        message
      )
      VALUES ($1, $2, $3)
      RETURNING id, created_at
      `,
      [data.name, data.email, data.message],
    );

    const row = result.rows[0];

    if (!row) {
      throw new Error("Contact message was not created");
    }

    return row;
  }

  async updateStatus(
    id: string,
    status: ContactMessageStatus,
  ): Promise<ContactMessage | null> {
    const result = await pool.query<ContactMessage>(
      `
      UPDATE contact_messages
      SET status = $1
      WHERE id = $2
      RETURNING
        id,
        name,
        email,
        message,
        status,
        created_at
      `,
      [status, id],
    );

    const row = result.rows[0];

    if (!row) {
      throw new Error("Contact message was not created");
    }

    return row;
  }
}

export default new ContactRepository();