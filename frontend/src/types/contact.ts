export interface ContactInfo {
  email: string;
  phone: string;
  whatsapp: string;
  github: string;
  linkedin: string;
  instagram: string;
}

export interface SendMessageInput {
  name: string;
  email: string;
  message: string;
}

export interface SendMessageResponse {
  id: string;
  created_at: string;
}

export interface ContactLinksProps {
  contact: ContactInfo;
}