import { Component, OnInit } from '@angular/core';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpClientService } from 'src/app/services/common/http-client.service';
import {Create_Product} from 'src/app/contracts/create_product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent extends BaseComponent implements OnInit {

  constructor(spinner: NgxSpinnerService, private httpClientService: HttpClientService) {
    super(spinner)
  }

  ngOnInit(): void {
    this.showSpinner(SpinnerType.BallAtom);
    this.httpClientService.get<Create_Product[]>({
      controller: "products"
    }).subscribe(data => console.log(data));

    //this.httpClientService.post({
    //  controller: "product"
    //},
    //  {
    //    name: "Pen",
    //    stock: 100,
    //    price: 15
    //  }).subscribe(data => console.log(data));
  }
}
