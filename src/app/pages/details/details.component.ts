import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// Services
import { ModalService } from '../../providers/modal/modal.service';
import { ResolveByIdService } from '../../providers/resolve-by-id/resolve-by-id.service';
import { HeaderTitleService } from '../../providers/header-title/header-title.service';
import { GAnalyticsService } from '../../providers/g-analytics/g-analytics.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  private sub: any;
  public id: string;
  public type: string;
  public details: any;
  public detailsModal: any = {};
  public imageModal: any = {};
  public typeModal: string;

  constructor(private route: ActivatedRoute,
              private modalService: ModalService,
              private resolveByIdService: ResolveByIdService,
              private headerTitleService: HeaderTitleService,
              private analyticsService: GAnalyticsService) {
    // We get the id and the type from the selected item
    this.sub = this.route.params.subscribe((params) => {
      this.id = params['id'];
      this.type = params['type'];
    });
  }

  ngOnInit() {
    // Compare the id passed from previous page with id of all the objects in the collection
    this.details = this.resolveByIdService.resolveById(this.id, this.type);
    this.headerTitleService.setTitle('Details');
  }

  /**
   * Open modal
   * Resolve the item to display thanks to its id and type
   *
   * @param id
   * @param type
   */
  public openModal(id: string, type: string): void {
    this.typeModal = type;
    this.detailsModal = this.modalService.openModal(id, type);
  }

  /**
   * Galleries, Docs and Prototypes are not visible if project is confidential
   *
   * @returns {any}
   */
  public isConfidential(): boolean {
    const confidentialInfo = ['#project15', '#project14', '#project13', '#project12', '#project11', '#project10'];

    for (const confidential of confidentialInfo) {
      if (this.details.id === confidential) {
        return true;
      }
    }
  }

  /**
   * Update the content of the details page by retrieving project Id from modal
   *
   * @param project
   */
  public updateContent(project: any): void {
    this.id = project.id;
    this.type = 'project';
    this.analyticsService.captureCustomEvent(
      'navigation',
      `Update details page to ${this.type}`,
      `${project.name}`,
      4);
    this.details = this.resolveByIdService.resolveById(project.id, 'project');
    document.getElementById('anchor-top').scrollIntoView({block: 'start', behavior: 'smooth'});
  }

}
