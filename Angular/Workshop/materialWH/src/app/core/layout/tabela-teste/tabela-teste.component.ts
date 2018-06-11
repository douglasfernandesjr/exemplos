import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { TabelaTesteDataSource } from './tabela-teste-datasource';

@Component({
  selector: 'tabela-teste',
  templateUrl: './tabela-teste.component.html',
  styleUrls: ['./tabela-teste.component.css']
})
export class TabelaTesteComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: TabelaTesteDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new TabelaTesteDataSource(this.paginator, this.sort);
  }
}
