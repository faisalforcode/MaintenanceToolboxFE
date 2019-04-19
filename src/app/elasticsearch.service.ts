import { Injectable } from '@angular/core';
import { Client } from 'elasticsearch-browser';
import * as elasticsearch from 'elasticsearch-browser';

@Injectable({
  providedIn: 'root'
})
export class ElasticsearchService {

  private client: Client;

  constructor() {
    if (!this.client) {
      this._connect();
    }
  }

  private connect() {
    this.client = new Client({
      host: 'http://localhost:9200',
      log: 'trace'
    });
  }

  private _connect() {
    this.client = new elasticsearch.Client({
      host: 'localhost:9200',
      log: 'trace'
    });
  }

  isAvailable(): any {
    return this.client.ping({
      requestTimeout: Infinity,
      body: 'Hello Maintenance!'
    });
  }

  fullTextSearch(_index, _type, _queryText): any {
    return this.client.search({
      index: _index,
      type: _type,
      filterPath: ['hits.hits._source', 'hits.total', '_scroll_id'],
      body: {
        'query': {
          'multi_match': {
            "query": _queryText,
            "type" : "phrase_prefix",
            "fields": ['volumeTitle', 'volumeNumber', 'volumeType', 'issuedDate', 'applicability', 'model', 'variant']
          }
        }
      },
      '_source': ['volumeTitle', 'volumeNumber', 'volumeType', 'issuedDate', 'applicability', 'model', 'variant', 'contentFileName']
    });
  }
}