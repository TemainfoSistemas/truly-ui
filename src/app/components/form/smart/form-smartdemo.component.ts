import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { ActionsModal } from '../../../../../projects/truly-ui/src/components/core/enums/actions-modal';
import { ModalService } from '../../../../../projects/truly-ui/src/components/modal/modal.service';
import * as json from './modal-config-table';
import { SmartFormModalComponent } from './smart-modal/smart-modal.component';

@Component({
  selector: 'app-form-smartdemo',
  templateUrl: './form-smartdemo.component.html',
  styleUrls: ['./form-smartdemo.component.scss']
})
export class FormSmartdemoComponent implements OnInit {

  public reactive = 'HTML';

  public modalConfig;

  constructor(private factory: ComponentFactoryResolver, private modalService: ModalService ) { }

  ngOnInit() {
    this.modalConfig = json.ModalConfig;
  }

  openModal( action: ActionsModal ) {
    this.modalService.createModal( SmartFormModalComponent, {
      factory: this.factory,
      executeAction: action,
      identifier: 'FORM_SMART_1',
      dataForm: {
        nickname: 'willz',
        id: 'b42f0653-b0a3-4482-b2e3-3d971ddaeb3f',
        email: 'robert.william@truly.com',
        name: 'robert',
        lastName: 'william',
        user: 'robertw',
        password: '1234567#A',
      },
      actions: {
        insertCall: function ( values ) {
          console.log('INSERT Function executed', values);
        },
        updateCall: function ( values ) {
          console.log('UPDATE Function executed', values );
        },
        deleteCall: function ( values ) {
          console.log('DELETE Function executed', values );
        },
        viewCall: function ( values ) {
          console.log('VIEW Function executed', values );
        }
      }
    } );
  }

}
