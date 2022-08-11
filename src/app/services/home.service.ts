import { Injectable } from '@angular/core';
import { HomeServiceResponse } from '../interfaces/home';

const constant: HomeServiceResponse = {
  main: 'nmain',
  nodes: [
    // --- node ---
    {
      data: {
        id: 'nmain',
        name: 'メインノード',
        parent: 'g001'
      }
    },
    {
      data: {
        id: 'n001',
        name: 'ノード1',
        parent: 'g001'
      }
    },
    {
      data: {
        id: 'n002',
        name: 'ノード2',
        parent: 'g002'
      }
    },
    {
      data: {
        id: 'n003',
        name: 'ノード3',
        parent: 'g003'
      }
    },
    {
      data: {
        id: 'n004',
        name: 'ノード4',
        parent: 'g001'
      }
    },
    {
      data: {
        id: 'n005',
        name: 'ノード5',
        parent: 'g002'
      }
    },
    {
      data: {
        id: 'n006',
        name: 'ノード6',
        parent: 'g003'
      }
    },
    {
      data: {
        id: 'n007',
        name: 'ノード7',
        parent: 'g001'
      }
    },
    {
      data: {
        id: 'n008',
        name: 'ノード8',
        parent: 'g002'
      }
    },
    {
      data: {
        id: 'n009',
        name: 'ノード9',
        parent: 'g003'
      }
    },
    {
      data: {
        id: 'n010',
        name: 'ノード10',
        parent: 'g002'
      }
    },
    {
      data: {
        id: 'n011',
        name: 'ノード11',
        parent: 'g003'
      }
    },
    {
      data: {
        id: 'n012',
        name: 'ノード12',
        parent: 'g001'
      }
    },
    {
      data: {
        id: 'n013',
        name: 'ノード13',
        parent: 'g001'
      }
    },
    {
      data: {
        id: 'n014',
        name: 'ノード14',
        parent: 'g002'
      }
    },
    {
      data: {
        id: 'n015',
        name: 'ノード15',
        parent: 'g001'
      }
    },
    // --- group ---
    {
      data: {
        id: 'g001',
        name: 'グループ1'
      }
    },
    {
      data: {
        id: 'g002',
        name: 'グループ2'
      }
    },
    {
      data: {
        id: 'g003',
        name: 'グループ3'
      }
    }
  ],
  edges: [
    {
      data: {
        id: 'main-001',
        source: 'nmain',
        target: 'n001'
      }
    },
    {
      data: {
        id: 'main-002',
        source: 'nmain',
        target: 'n002'
      }
    },
    {
      data: {
        id: 'main-003',
        source: 'nmain',
        target: 'n003'
      }
    },
    {
      data: {
        id: 'main-004',
        source: 'nmain',
        target: 'n004'
      }
    },
    {
      data: {
        id: 'main-005',
        source: 'nmain',
        target: 'n005'
      }
    },
    {
      data: {
        id: 'main-006',
        source: 'nmain',
        target: 'n006'
      }
    },
    {
      data: {
        id: 'main-007',
        source: 'nmain',
        target: 'n007'
      }
    },
    {
      data: {
        id: 'main-008',
        source: 'nmain',
        target: 'n008'
      }
    },
    {
      data: {
        id: 'main-009',
        source: 'nmain',
        target: 'n009'
      }
    },
    {
      data: {
        id: 'main-010',
        source: 'nmain',
        target: 'n010'
      }
    },
    {
      data: {
        id: 'main-011',
        source: 'nmain',
        target: 'n011'
      }
    },
    {
      data: {
        id: 'main-012',
        source: 'nmain',
        target: 'n012'
      }
    },
    {
      data: {
        id: 'main-013',
        source: 'nmain',
        target: 'n013'
      }
    },
    {
      data: {
        id: 'main-014',
        source: 'nmain',
        target: 'n014'
      }
    },
    {
      data: {
        id: 'main-015',
        source: 'nmain',
        target: 'n015'
      }
    },
  ]
};

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor() {}

  /** グラフデータの取得 */
  getGraphData(): HomeServiceResponse {
    return constant;
  }
}
