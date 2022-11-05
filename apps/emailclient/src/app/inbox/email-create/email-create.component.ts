import { Component, Input, OnInit } from '@angular/core';
import { CreateEmail } from '@ng-pg/api-interfaces';
import { EmailService } from '../email.service';
import { NgbModal,  NgbModalRef } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'ng-pg-email-create',
  templateUrl: './email-create.component.html',
  styleUrls: ['./email-create.component.scss'],
})
export class EmailCreateComponent implements OnInit {
  modalRef: NgbModalRef;
  @Input() from = '';

  email: CreateEmail = {
    from: '',
    to: '',
    subject: '',
    text: '',
  }

  constructor(
    private emailService: EmailService,
    private modalService: NgbModal,
  ) {}

  ngOnInit(): void {
    this.email.from = this.from;
  }

  closeModal() {
    this.modalRef.close()
  }

  openModal(content: any) {
    this.modalRef = this.modalService
      .open(content, { fullscreen: true })
  }
  
  onEmailSend(email: CreateEmail) {
    this.emailService
      .createEmailHttp(email)
      .subscribe(() => this.closeModal())
  }
}
