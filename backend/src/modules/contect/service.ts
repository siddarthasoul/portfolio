import { contact, type ContactInfo } from "../../data/contect.js";
import { ApiError } from "../../utils/errer.js";
import ContactRepository, {
  type ContactMessageStatus,
  type ContactMessage,
} from "./repository.js";
import type { CreateMessageInput } from "./type.js";

class Contact {
  async getContact(): Promise<ContactInfo> {
    if (!contact) {
      throw new ApiError(404, "Contact information not found");
    }

    return contact;
  }

  async sendMessage(
    data: CreateMessageInput,
  ) {
    const message = await ContactRepository.create(data);

    return {
      id: message.id,
      created_at: message.created_at,
    };
  }


  async updateMessageStatus(
    id: string,
    status: ContactMessageStatus,
  ): Promise<ContactMessage> {
    const message = await ContactRepository.updateStatus(id, status);

    if (!message) {
      throw new ApiError(404, "Message not found");
    }

    return message;
  }


}

export default new Contact();