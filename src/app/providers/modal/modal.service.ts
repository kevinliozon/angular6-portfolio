import { Injectable } from '@angular/core';
// Services
import { ResolveByIdService } from '../resolve-by-id/resolve-by-id.service';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private resolveByIdService: ResolveByIdService) { }

  /**
   * Open modal
   * Resolve the item to display thanks to its id and type
   *
   * @param {string} id
   * @param {string} type
   * @returns {any}
   */
  public openModal(id: string, type: string): any {
    return this.resolveByIdService.resolveById(id, type);
  }

}
