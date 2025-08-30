import { Teacher } from '../types';

export const TEACHER_DATA: Teacher[] = [
  {
    "id": 1,
    "name": "NRIPENDRA TIWARY",
    "class_sections": ["XII C", "X D Sc.", "IX A Sc.", "IX D Sc.", "XI B", "IX C Sc.", "XII B", "XI C", "X A Sc.", "XC Sc.", "IX B Sc."],
    "points": 0,
    "preference": "",
    "timetable": {
      "Mon": ["XII B", "IX C Sc.", "XII C", "-", "IX A Sc.", "IX D Sc.", "-", "XI B"],
      "Tue": ["XII B", "IX C Sc.", "XII C", "-", "IX A Sc.", "IX D Sc.", "-", "XI B"],
      "Wed": ["XII B", "IX C Sc.", "XII C", "-", "IX A Sc.", "IX D Sc.", "-", "XI B"],
      "Thu": ["XII B", "X A Sc.", "XII C", "-", "IX A Sc.", "IX D Sc.", "-", "XI B"],
      "Fri": ["XII B", "XC Sc.", "XII C", "-", "IX A Sc.", "IX D Sc.", "-", "XI B"],
      "Sat": ["XI C", "IX B Sc.", "XII C", "-", "IX A Sc.", "IX D Sc.", "-", "XI B"]
    }
  },
  {
    "id": 2,
    "name": "MR. ARUN KUMAR",
    "class_sections": ["XIB", "VIIIB", "XIIA", "XIB PR", "XIB-GS", "XIIA PR", "XIC-GS"],
    "points": 0,
    "preference": "",
    "timetable": {
      "Mon": ["-", "-", "VIIIB", "-", "XIB PR", "XIB PR", "XIIA PR", "XIIA PR"],
      "Tue": ["-", "-", "VIIIB", "-", "XIB PR", "XIB PR", "XIIA PR", "XIIA PR"],
      "Wed": ["-", "-", "XIIA", "-", "XIB-GS", "XIB", "VIIIB", "-"],
      "Thu": ["-", "XIB", "XIIA", "-", "-", "XIB", "XIC-GS", "VIIIB"],
      "Fri": ["-", "VIIIB", "XIIA", "-", "-", "XIB", "-", "-"],
      "Sat": ["-", "VIIIB", "XIIA", "XIIA", "-", "XIB", "-", "-"]
    }
  },
  {
    "id": 3,
    "name": "MR. RAKESH CHOUDHARY",
    "class_sections": ["XIIB", "XIC", "XIC PR", "VIIID", "XIIB PR", "XIIB GS", "CLA"],
    "points": 0,
    "preference": "",
    "timetable": {
      "Mon": ["-", "XIC", "-", "-", "VIIID", "-", "-", "XIIB GS"],
      "Tue": ["XIIB", "XIC", "-", "VIIID", "VIIID", "-", "-", "XIC"],
      "Wed": ["XIIB", "XIC", "-", "-", "VIIID", "-", "XIIB PR", "XIIB PR"],
      "Thu": ["XIIB", "XIC", "-", "-", "VIIID", "-", "XIIB PR", "XIIB PR"],
      "Fri": ["XIIB", "-", "-", "-", "VIIID", "-", "-", "XIC PR"],
      "Sat": ["XIIB", "-", "-", "XIC PR", "XIC PR", "-", "VIIID", "CLA"]
    }
  },
  {
    "id": 4,
    "name": "MS. KUSUM KUMARI",
    "class_sections": ["XIIC", "VIC VE", "XIA PR", "XIA", "VIC", "VIIB", "XIIC PR", "CLA"],
    "points": 0,
    "preference": "",
    "timetable": {
      "Mon": ["XIIC", "-", "-", "XIA PR", "-", "-", "VIC", "VIIB"],
      "Tue": ["XIIC", "VIC VE", "-", "XIA PR", "-", "-", "VIC", "VIIB"],
      "Wed": ["XIIC", "-", "-", "XIA", "VIIB", "-", "VIC", "XIIC PR"],
      "Thu": ["XIIC", "-", "-", "XIA", "VIIB", "-", "-", "XIIC PR"],
      "Fri": ["XIIC", "-", "-", "XIA", "VIIB", "-", "XIA", "VIC"],
      "Sat": ["XIIC", "VIC", "-", "VIC", "VIIB", "-", "XIA", "CLA"]
    }
  },
  {
    "id": 5,
    "name": "MRS. R. BALA",
    "class_sections": ["XIB", "XIB PR", "VIIA", "XIIC", "XIIC GS", "XIIC PR", "CLA"],
    "points": 0,
    "preference": "",
    "timetable": {
      "Mon": ["XIB", "-", "-", "VIIA", "-", "-", "XIIC", "XIIC PR"],
      "Tue": ["XIB", "-", "-", "VIIA", "-", "-", "XIIC GS", "XIIC PR"],
      "Wed": ["XIB", "-", "-", "VIIA", "XIIC", "-", "VIIA", "-"],
      "Thu": ["XIB", "-", "-", "VIIA", "XIIC", "-", "XIIC", "-"],
      "Fri": ["XIB PR", "-", "-", "-", "XIIC", "-", "VIIA", "-"],
      "Sat": ["XIB PR", "-", "-", "-", "-", "-", "VIIA", "CLA"]
    }
  },
  {
    "id": 6,
    "name": "MRS. SANJU KUMARI",
    "class_sections": ["XIIA", "XIIB", "VIB", "XIIB PR", "XIIA PR", "CLA"],
    "points": 0,
    "preference": "",
    "timetable": {
      "Mon": ["XIIA", "-", "-", "VIB", "-", "XIIB PR", "-", "XIIB"],
      "Tue": ["XIIA", "-", "-", "VIB", "-", "XIIB PR", "-", "VIB"],
      "Wed": ["XIIA", "XIIB", "-", "-", "-", "-", "XIIA PR", "-"],
      "Thu": ["XIIA", "XIIB", "-", "VIB", "-", "-", "XIIA PR", "-"],
      "Fri": ["XIIA", "XIIB", "-", "VIB", "-", "-", "-", "VIB"],
      "Sat": ["-", "XIIB", "-", "-", "-", "-", "-", "CLA"]
    }
  },
  {
    "id": 7,
    "name": "BALRAM KUMAR BARNWAL",
    "class_sections": ["VIID", "XIA", "XIC", "XIC PR", "XIA PR", "VIIC"],
    "points": 0,
    "preference": "",
    "timetable": {
      "Mon": ["VIID", "-", "-", "XIC PR", "-", "-", "VIIC", "XIA"],
      "Tue": ["VIID", "-", "-", "XIC PR", "-", "-", "VIIC", "XIA"],
      "Wed": ["VIID", "XIA", "-", "XIC", "-", "-", "VIIC", "VIIC"],
      "Thu": ["XIA", "-", "-", "XIC", "-", "-", "-", "VIID"],
      "Fri": ["VIID", "XIA", "-", "XIC", "-", "-", "XIC", "XIA PR"],
      "Sat": ["VIID", "XIC", "-", "XIA PR", "XIA PR", "-", "VIIC", "-"]
    }
  },
  {
    "id": 8,
    "name": "MR. A K PANDEY",
    "class_sections": ["XIID", "XIIB", "XIC+A"],
    "points": 0,
    "preference": "",
    "timetable": {
      "Mon": ["-", "XIID", "-", "XIID", "XIIB", "-", "XIC+A", "-"],
      "Tue": ["-", "XIID", "-", "XIID", "XIIB", "-", "XIC+A", "-"],
      "Wed": ["-", "XIID", "-", "-", "XIIB", "-", "XIC+A", "XIIB"],
      "Thu": ["-", "XIID", "-", "-", "XIIB", "-", "XIC+A", "XIIB"],
      "Fri": ["-", "XIID", "-", "-", "XIIB", "-", "XIC+A", "XIIB"],
      "Sat": ["-", "XIID", "-", "-", "-", "-", "XIC+A", "XIID"]
    }
  },
  {
    "id": 9,
    "name": "MD. SHAMIM AKHTAR",
    "class_sections": ["XIIC+A", "XIB", "XID", "VIC G"],
    "points": 0,
    "preference": "",
    "timetable": {
      "Mon": ["-", "XIIC+A", "-", "XIIC+A", "-", "-", "XID", "XIB"],
      "Tue": ["-", "XIIC+A", "-", "XIIC+A", "-", "-", "XID", "XIB"],
      "Wed": ["-", "XIIC+A", "-", "XIB", "-", "-", "XID", "-"],
      "Thu": ["-", "XIIC+A", "-", "XIB", "-", "-", "XID", "VIC G"],
      "Fri": ["-", "XIIC+A", "-", "XIB", "-", "-", "XID", "XIB"],
      "Sat": ["-", "XIIC+A", "-", "XIB", "-", "-", "XIIC+A", "-"]
    }
  },
  {
    "id": 10,
    "name": "MR. SAMBHAV JAIN",
    "class_sections": ["VIIIB", "XC", "XIIC", "XID", "VIIA", "CLA"],
    "points": 0,
    "preference": "",
    "timetable": {
      "Mon": ["VIIIB", "XC", "-", "-", "XIIC", "-", "XID", "VIIA"],
      "Tue": ["VIIIB", "XC", "-", "-", "XIIC", "-", "XID", "-"],
      "Wed": ["VIIIB", "XC", "-", "XIIC", "-", "-", "XID", "-"],
      "Thu": ["VIIIB", "XC", "-", "XIIC", "-", "-", "-", "VIIA"],
      "Fri": ["VIIIB", "XC", "-", "XIIC", "-", "-", "-", "VIIA"],
      "Sat": ["VIIIB", "XC", "-", "XIIC", "-", "-", "-", "CLA"]
    }
  },
  {
    "id": 11,
    "name": "MR. DHARMENDRA KR",
    "class_sections": ["XIC", "XIIA+D", "XIA", "VID G", "IXA", "CLA"],
    "points": 0,
    "preference": "",
    "timetable": {
      "Mon": ["XIC", "XIIA+D", "-", "XIIA+D", "-", "-", "XIA", "IXA"],
      "Tue": ["XIC", "XIIA+D", "-", "XIIA+D", "-", "-", "XIA", "IXA"],
      "Wed": ["XIC", "XIIA+D", "-", "-", "-", "-", "XIA", "IXA"],
      "Thu": ["XIC", "XIIA+D", "-", "-", "-", "-", "-", "VID G"],
      "Fri": ["XIC", "XIIA+D", "-", "-", "-", "-", "-", "IXA"],
      "Sat": ["XIC", "XIIA+D", "-", "-", "-", "-", "-", "CLA"]
    }
  },
  {
    "id": 12,
    "name": "MR. RAKESH SHARMA",
    "class_sections": ["XIID", "XIIB", "XIC", "XIA", "VIB", "IXB", "CLA"],
    "points": 0,
    "preference": "",
    "timetable": {
      "Mon": ["XIID", "XIIB", "-", "-", "IXB", "-", "IXB", "XIA"],
      "Tue": ["XIID", "XIIB", "-", "VIB", "-", "-", "IXB", "XIA"],
      "Wed": ["XIID", "-", "-", "XIA", "-", "-", "IXB", "XIC"],
      "Thu": ["XIID", "-", "-", "XIA", "-", "-", "XIIB", "XIC"],
      "Fri": ["XIID", "XIC", "-", "XIA", "-", "XIIB", "-", "IXB"],
      "Sat": ["XIID", "XIA", "-", "IXB", "-", "XIIB", "XIC", "CLA"]
    }
  },
  {
    "id": 13,
    "name": "MR. R K SINGH",
    "class_sections": ["XIIA", "XIB", "XID", "VIA", "IXA", "XIIC"],
    "points": 0,
    "preference": "",
    "timetable": {
      "Mon": ["-", "XIB", "-", "VIA", "XIIA", "-", "XIIC", "XID"],
      "Tue": ["-", "XIB", "-", "-", "XIIA", "-", "XIIC", "XID"],
      "Wed": ["-", "XIB", "-", "-", "XIIA", "-", "XIIC", "XID"],
      "Thu": ["-", "XID", "-", "IXA", "XIIA", "-", "XIB", "IXA"],
      "Fri": ["-", "XID", "-", "-", "XIIA", "-", "XIB", "IXA"],
      "Sat": ["XIIA", "XID", "-", "IXA", "XIIC", "-", "XIB", "-"]
    }
  },
  {
    "id": 14,
    "name": "MS. SHWETA PRAKASH",
    "class_sections": ["XIA", "VIIIC", "VIIIA", "XIIA PR", "XIIA", "XIA PR"],
    "points": 0,
    "preference": "",
    "timetable": {
      "Mon": ["XIA", "VIIIC", "-", "-", "VIIIA", "-", "XIIA PR", "-"],
      "Tue": ["XIA", "VIIIC", "-", "-", "VIIIA", "-", "XIIA", "-"],
      "Wed": ["XIA", "VIIIC", "-", "-", "VIIIA", "-", "XIIA", "XIA PR"],
      "Thu": ["-", "VIIIC", "-", "-", "VIIIA", "-", "XIIA", "XIA PR"],
      "Fri": ["XIA", "VIIIC", "-", "-", "VIIIA", "-", "XIIA", "XIIA PR"],
      "Sat": ["XIA", "VIIIC", "-", "-", "VIIIA", "-", "XIIA", "XIIA PR"]
    }
  },
  {
    "id": 15,
    "name": "MR. INDRAJIT KUMAR",
    "class_sections": ["XIIB", "XIIA+D", "XIIB PR", "XIB", "XI A+D", "XIB PR"],
    "points": 0,
    "preference": "",
    "timetable": {
      "Mon": ["XIIB", "XIIA+D", "-", "XIIA+D", "-", "-", "XI A+D", "XIB"],
      "Tue": ["-", "XIIA+D", "-", "XIIA+D", "XIB", "-", "XI A+D", "XII B"],
      "Wed": ["-", "XIIA+D", "-", "XIIB", "XIB", "-", "XI A+D", "XIB PR"],
      "Thu": ["-", "XIIA+D", "-", "XIIB", "XIB", "-", "-", "XIB PR"],
      "Fri": ["-", "XIIA+D", "-", "XIIB", "XIB", "-", "-", "XIIB PR"],
      "Sat": ["-", "XIIA+D", "-", "XIIB PR", "XIIB PR", "-", "XII A+D", "-"]
    }
  },
  {
    "id": 16,
    "name": "MR. SANJAY KUMAR",
    "class_sections": ["XID", "VIIID", "XIID", "VID VE", "VIIID VE", "VIIID G"],
    "points": 0,
    "preference": "",
    "timetable": {
      "Mon": ["-", "-", "-", "XID", "XID", "-", "VIIID", "XIID"],
      "Tue": ["-", "XID", "-", "XIID", "XID", "-", "VIIID", "VIIID G"],
      "Wed": ["-", "-", "-", "XIID", "XID", "-", "VIIID", "VID VE"],
      "Thu": ["-", "-", "-", "XIID", "XID", "-", "VIIID", "XID"],
      "Fri": ["-", "-", "-", "XIID", "XID", "-", "VIIID", "VIIID VE"],
      "Sat": ["-", "VIIID", "-", "XIID", "XID", "-", "-", "-"]
    }
  },
  {
    "id": 17,
    "name": "MS. DIVYA JOLLY",
    "class_sections": ["XID ACC", "XID BST", "XIID ACC", "XIID BST", "CLA"],
    "points": 0,
    "preference": "",
    "timetable": {
      "Mon": ["XID ACC", "XID ACC", "-", "-", "XIID ACC", "-", "XIID BST", "-"],
      "Tue": ["XID ACC", "-", "-", "XID BST", "XIID ACC", "-", "XIID BST", "XID ACC"],
      "Wed": ["XID ACC", "-", "-", "XID BST", "XIID ACC", "-", "XIID BST", "XID BST"],
      "Thu": ["XID ACC", "-", "-", "XID BST", "XIID ACC", "-", "XIID ACC", "XID BST"],
      "Fri": ["XID ACC", "-", "-", "XID BST", "XIID ACC", "-", "XIID ACC", "XID BST"],
      "Sat": ["XID ACC", "-", "-", "XID BST", "-", "-", "XID BST", "CLA"]
    }
  },
  {
    "id": 18,
    "name": "Mr. ASHARFI PASWAN",
    "class_sections": ["XA", "VIIIA", "VIIIB", "XD", "VII D", "IXC", "CLA"],
    "points": 0,
    "preference": "",
    "timetable": {
      "Mon": ["XA", "-", "-", "VIIIA", "VIIIB", "-", "XD", "VII D"],
      "Tue": ["XA", "-", "-", "VIIIA", "VIIIB", "-", "XD", "XD"],
      "Wed": ["XA", "-", "-", "VIIIA", "VIIIB", "-", "XD", "VII D"],
      "Thu": ["XA", "-", "-", "VIIIA", "VIIIB", "-", "-", "VII D"],
      "Fri": ["XA", "-", "-", "VIIIA", "VIIIB", "-", "-", "VII D"],
      "Sat": ["XA", "-", "-", "VIIIA", "VIIIB", "-", "XD", "CLA"]
    }
  },
  {
    "id": 19,
    "name": "Ms KRITIKA VERMA",
    "class_sections": ["VIB", "IX C", "IXA", "VIIC", "VID", "VIIIA-VE", "CLA"],
    "points": 0,
    "preference": "",
    "timetable": {
      "Mon": ["VIB", "IX C", "-", "-", "IXA", "-", "VIIC", "VID"],
      "Tue": ["VIB", "IX C", "-", "-", "IXA", "-", "VIIC", "IXA"],
      "Wed": ["VIB", "IX C", "-", "-", "IXA", "-", "VIIC", "VIIIA-VE"],
      "Thu": ["-", "IX C", "-", "-", "IXA", "-", "VIIC", "VID"],
      "Fri": ["VIB", "IX C", "-", "-", "IXA", "-", "VIIC", "VID"],
      "Sat": ["VIB", "IX C", "-", "-", "-", "-", "-", "CLA"]
    }
  },
  {
    "id": 20,
    "name": "MR. SANJAY MISHRA",
    "class_sections": ["VIIB", "VIIA", "XC", "X B", "VIIID", "CLA"],
    "points": 0,
    "preference": "",
    "timetable": {
      "Mon": ["VIIB", "VIIA", "-", "XC", "-", "X B", "VIIID", "XC"],
      "Tue": ["VIIB", "VIIA", "-", "XC", "-", "X B", "VIIID", "-"],
      "Wed": ["VIIB", "VIIA", "-", "XC", "-", "X B", "VIIID", "XB"],
      "Thu": ["VIIB", "VIIA", "-", "XC", "-", "X B", "VIIID", "-"],
      "Fri": ["VIIB", "VIIA", "-", "XC", "-", "X B", "VIIID", "-"],
      "Sat": ["VIIB", "VIIA", "-", "XC", "-", "X B", "VIIID", "CLA"]
    }
  },
  {
    "id": 21,
    "name": "Mr. SURAJ KUMAR",
    "class_sections": ["IX B", "VIIIC", "IXD", "VI A", "VIC", "CLA"],
    "points": 0,
    "preference": "",
    "timetable": {
      "Mon": ["IX B", "-", "-", "VIIIC", "IXD", "-", "-", "IXD"],
      "Tue": ["IX B", "-", "-", "VIIIC", "IXD", "-", "VI A", "IXB"],
      "Wed": ["IX B", "-", "-", "VIIIC", "IXD", "-", "VIC", "-"],
      "Thu": ["IX B", "-", "-", "VIIIC", "IXD", "-", "VI A", "VIC"],
      "Fri": ["IX B", "-", "-", "VIIIC", "IXD", "-", "VI A", "VIC"],
      "Sat": ["IX B", "-", "-", "VIIIC", "-", "-", "VI A", "CLA"]
    }
  },
  {
    "id": 22,
    "name": "MR. SANJAY KUMAR",
    "class_sections": ["IXD", "VIIIB", "VIIC", "VIIID", "XB", "XA", "CLA"],
    "points": 0,
    "preference": "",
    "timetable": {
      "Mon": ["IXD", "VIIIB", "-", "-", "-", "-", "XA", "VII C"],
      "Tue": ["IXD", "VIIIB", "-", "XB", "VIII D", "-", "XA", "VIIC"],
      "Wed": ["IXD", "VIIIB", "-", "VIIID", "-", "-", "XA", "XA"],
      "Thu": ["IXD", "VIIIB", "-", "VIIID", "-", "-", "XA", "IXD"],
      "Fri": ["IXD", "VIIIB", "-", "VIIID", "-", "-", "XA", "VIIC"],
      "Sat": ["IXD", "VIIC", "-", "VIIID", "-", "-", "XA", "CLA"]
    }
  },
  {
    "id": 23,
    "name": "MR. ABHIJEET KU.SANKAR",
    "class_sections": ["VID", "VIID", "VIA", "XD", "XC", "VIIIC", "CLA"],
    "points": 0,
    "preference": "",
    "timetable": {
      "Mon": ["VID", "-", "-", "VIID", "XD", "-", "XC", "VIID"],
      "Tue": ["VID", "-", "-", "VIA", "XD", "-", "XC", "VIID"],
      "Wed": ["VID", "-", "-", "VIA", "XD", "-", "XC", "XC"],
      "Thu": ["VID", "-", "-", "VIA", "XD", "-", "XC", "XD"],
      "Fri": ["VID", "-", "-", "VIA", "XD", "-", "XC", "VIID"],
      "Sat": ["VID", "VIID", "-", "VIA", "-", "-", "XC", "CLA"]
    }
  },
  {
    "id": 24,
    "name": "Ms KALPANA SINHA",
    "class_sections": ["VIIA", "VIB", "VIIB", "IXC", "VIC", "VIIIA", "CLA"],
    "points": 0,
    "preference": "",
    "timetable": {
      "Mon": ["VIIA", "VIB", "-", "VIIB", "-", "-", "VIC", "IXC"],
      "Tue": ["VIIA", "VIB", "-", "-", "-", "-", "IXC", "VIC"],
      "Wed": ["VIIA", "VIB", "-", "VIIB", "-", "-", "IXC", "VIC"],
      "Thu": ["VIIA", "VIB", "-", "VIIB", "-", "-", "IXC", "-"],
      "Fri": ["VIIA", "VIB", "-", "VIIB", "IXC", "-", "VIC", "-"],
      "Sat": ["VIIA", "VIB", "-", "VIIB", "IXC", "-", "VIC", "CLA"]
    }
  },
  {
    "id": 25,
    "name": "MR. D K SINGH",
    "class_sections": ["XB", "VID", "IXD", "IXC", "XA", "CLA"],
    "points": 0,
    "preference": "",
    "timetable": {
      "Mon": ["XB", "VID", "-", "IXD", "-", "-", "IXC", "XB"],
      "Tue": ["XB", "VID", "-", "IXD", "-", "-", "IXC", "XA"],
      "Wed": ["XB", "VID", "-", "IXD", "-", "-", "IXC", "IXD"],
      "Thu": ["XB", "VID", "-", "IXD", "-", "-", "IXC", "-"],
      "Fri": ["XB", "VID", "-", "IXD", "-", "-", "IXC", "IXC"],
      "Sat": ["XB", "-", "-", "IXD", "-", "-", "IXC", "CLA"]
    }
  },
  {
    "id": 26,
    "name": "MRS. ARTI KUMARI",
    "class_sections": ["XD", "IXB", "IXA", "VIA", "XC", "CLA"],
    "points": 0,
    "preference": "",
    "timetable": {
      "Mon": ["XD", "IXB", "-", "-", "VIA", "-", "IXA", "XD"],
      "Tue": ["XD", "IXB", "-", "-", "VIA", "-", "IXA", "VIA"],
      "Wed": ["XD", "IXB", "-", "-", "VIA", "-", "IXA", "IXB"],
      "Thu": ["XD", "IXB", "-", "-", "VIA", "-", "IXA", "XC"],
      "Fri": ["XD", "IXB", "-", "IXA", "-", "-", "IXA", "VIA"],
      "Sat": ["XD", "IXB", "-", "-", "-", "-", "IXA", "CLA"]
    }
  },
  {
    "id": 27,
    "name": "MR. ATUL PRAKASH",
    "class_sections": ["IXC", "VIIB", "XB", "VIA", "VIIIB", "CLA"],
    "points": 0,
    "preference": "",
    "timetable": {
      "Mon": ["IXC", "VIIB", "-", "XB", "-", "-", "VIA", "VIA"],
      "Tue": ["IXC", "VIIB", "-", "-", "-", "-", "VIIIB", "XB"],
      "Wed": ["IXC", "VIIB", "-", "XB", "-", "-", "VIIIB", "IXC"],
      "Thu": ["IXC", "VIIB", "-", "XB", "-", "-", "VIIIB", "XB"],
      "Fri": ["IXC", "VIIB", "-", "XB", "-", "-", "VIIIB", "VIA"],
      "Sat": ["IXC", "VIIB", "-", "XB", "-", "-", "VIIIB", "CLA"]
    }
  },
  {
    "id": 28,
    "name": "MR. SANJAY KUMAR",
    "class_sections": ["XC", "VIIC", "VIIA", "IXD", "VIB", "CLA"],
    "points": 0,
    "preference": "",
    "timetable": {
      "Mon": ["XC", "-", "-", "VIIC", "VIIA", "-", "IXD", "VIB"],
      "Tue": ["XC", "-", "-", "VIIC", "VIIA", "-", "IXD", "XC"],
      "Wed": ["XC", "-", "-", "VIIC", "VIIA", "-", "IXD", "VIB"],
      "Thu": ["XC", "-", "-", "VIIC", "VIIA", "-", "IXD", "VIB"],
      "Fri": ["XC", "-", "-", "VIIC", "VIIA", "-", "IXD", "IXD"],
      "Sat": ["XC", "-", "-", "VIIC", "VIIA", "-", "IXD", "CLA"]
    }
  },
  {
    "id": 29,
    "name": "MR. TONI KR. SONI",
    "class_sections": ["IXA", "VIIC G", "IXA Yoga", "XA WE", "XA", "VIIIA", "VIIIC", "VID G", "CLA"],
    "points": 0,
    "preference": "",
    "timetable": {
      "Mon": ["IXA", "-", "-", "-", "XA", "-", "VIIIA", "IXA"],
      "Tue": ["IXA", "VIIC G", "-", "XA WE", "XA", "-", "VIIIA", "-"],
      "Wed": ["IXA", "-", "-", "-", "XA", "-", "VIIIA", "-"],
      "Thu": ["IXA", "IXA Yoga", "-", "-", "XA", "-", "VIIIA", "VID G"],
      "Fri": ["IXA", "-", "-", "-", "XA", "-", "VIIIA", "-"],
      "Sat": ["IXA", "-", "-", "-", "-", "-", "VIIIA", "CLA"]
    }
  },
  {
    "id": 30,
    "name": "V N CHAUDHARY",
    "class_sections": ["VIC", "XD", "VIID", "VID", "IXB", "CLA"],
    "points": 0,
    "preference": "",
    "timetable": {
      "Mon": ["VIC", "-", "-", "XD", "VIID", "-", "VID", "IXB"],
      "Tue": ["VIC", "-", "-", "XD", "VIID", "-", "VID", "IXB"],
      "Wed": ["VIC", "-", "-", "XD", "VIID", "-", "VID", "XD"],
      "Thu": ["VIC", "-", "-", "-", "VIID", "-", "VID", "XD"],
      "Fri": ["VIC", "-", "-", "-", "VIID", "-", "IXB", "VID"],
      "Sat": ["VIC", "-", "-", "XD", "VIID", "-", "IXB", "CLA"]
    }
  },
  {
    "id": 31,
    "name": "MR. P D PANDEY",
    "class_sections": ["VIIID", "XD", "VIC", "VIB", "IXD", "CLA"],
    "points": 0,
    "preference": "",
    "timetable": {
      "Mon": ["VIIID", "XD", "-", "VIC", "VIC", "-", "VIB", "IXD"],
      "Tue": ["VIIID", "XD", "-", "VIC", "VIC", "-", "VIB", "IXD"],
      "Wed": ["VIIID", "XD", "-", "VIC", "VIC", "-", "VIB", "IXD"],
      "Thu": ["VIIID", "XD", "-", "VIC", "VIC", "-", "VIB", "IXD"],
      "Fri": ["VIIID", "XD", "-", "-", "VIC", "-", "VIB", "XD"],
      "Sat": ["VIIID", "XD", "-", "VIC", "-", "-", "VIB", "CLA"]
    }
  },
  {
    "id": 32,
    "name": "MR. OM PRAKASH OM",
    "class_sections": ["VIA", "XA", "VID", "VIIA", "IXB"],
    "points": 0,
    "preference": "",
    "timetable": {
      "Mon": ["VIA", "XA", "-", "VID", "-", "-", "VIIA", "IXB"],
      "Tue": ["VIA", "XA", "-", "-", "VID", "-", "VIIA", "VIIA"],
      "Wed": ["VIA", "XA", "-", "-", "VID", "-", "VIIA", "VID"],
      "Thu": ["VIA", "XA", "-", "-", "VID", "-", "VIIA", "-"],
      "Fri": ["VIA", "XA", "-", "-", "-", "-", "IXB", "XA"],
      "Sat": ["VIA", "XA", "-", "VID", "-", "VIIA", "IXB", "-"]
    }
  },
  {
    "id": 33,
    "name": "MR. A K SINGH",
    "class_sections": ["VIIIC", "XB", "VIID", "VIIB", "IXC", "CLA"],
    "points": 0,
    "preference": "",
    "timetable": {
      "Mon": ["VIIIC", "XB", "-", "-", "VIIB", "VIID", "IXC", "VIIB"],
      "Tue": ["VIIIC", "XB", "-", "-", "VIIB", "-", "IXC", "VIIB"],
      "Wed": ["VIIIC", "XB", "-", "VIID", "-", "-", "IXC", "VIIB"],
      "Thu": ["VIIIC", "XB", "-", "VIID", "-", "-", "IXC", "VIIB"],
      "Fri": ["VIIIC", "XB", "-", "VIID", "-", "-", "IXC", "XB"],
      "Sat": ["VIIIC", "XB", "-", "-", "-", "-", "IXC", "CLA"]
    }
  },
  {
    "id": 34,
    "name": "MRS. M MADHU",
    "class_sections": ["VIIC HIN", "VIIC G", "VIID", "VIA", "VIIC", "XI A+C+D", "IXA+B+C+D", "VIIIC", "CLA"],
    "points": 0,
    "preference": "",
    "timetable": {
      "Mon": ["VIIC HIN", "VIIC G", "-", "-", "VIIC", "-", "XI A+C+D", "IXA+B+C+D"],
      "Tue": ["VIIC HIN", "-", "-", "VIID", "VIIC", "-", "XI A+C+D", "IXA+B+C+D"],
      "Wed": ["VIIC HIN", "-", "-", "-", "VIIC", "-", "XI A+C+D", "VIIIC"],
      "Thu": ["VIIC HIN", "VIID", "-", "-", "-", "-", "XI A+C+D", "VIA"],
      "Fri": ["VIIC HIN", "VIID", "-", "-", "VIA", "-", "XI A+C+D", "IXA+B+C+D"],
      "Sat": ["VIIC HIN", "VIA", "-", "-", "-", "-", "XI A+C+D", "CLA"]
    }
  },
  {
    "id": 35,
    "name": "MR. BIBHASH",
    "class_sections": ["VIIIA HIN", "XA+B+C+D", "VIC", "VID", "VIIB", "VIIID", "VIIIA", "VIB", "VIIIB", "CLA"],
    "points": 0,
    "preference": "",
    "timetable": {
      "Mon": ["VIIIA HIN", "XA+B+C+D", "-", "VIC", "-", "-", "VIIB", "VIIIB"],
      "Tue": ["VIIIA HIN", "XA+B+C+D", "-", "VIC", "-", "-", "VIIB", "VIIIB"],
      "Wed": ["VIIIA HIN", "XA+B+C+D", "-", "VIC", "-", "-", "VIIB", "VIIIB"],
      "Thu": ["VIIIA HIN", "XA+B+C+D", "-", "VID", "-", "-", "VIIID", "VIIIA"],
      "Fri": ["VIIIA HIN", "XA+B+C+D", "-", "VID", "-", "-", "VIIID", "XA+B+C+D"],
      "Sat": ["VIIIA HIN", "XA+B+C+D", "-", "VID", "-", "-", "VIIID", "CLA"]
    }
  },
  {
    "id": 36,
    "name": "MR. SHIV KUMAR",
    "class_sections": ["VIID", "IXD", "XIA", "IXA", "XIIB", "IXC", "IXB", "XC", "VIIC", "VIIIC", "XIIC", "XIIA", "XD", "XID", "VIIIB", "XB", "XA", "XIC", "VIIB", "XIID", "XIB", "VIIIA", "CLA"],
    "points": 0,
    "preference": "",
    "timetable": {
      "Mon": ["IXA", "XIA", "IXC", "VIID", "-", "VIIC", "VIIIC", "XD"],
      "Tue": ["XIIB", "XIB", "IXC", "-", "XC", "-", "XIIC", "VIIIA"],
      "Wed": ["-", "XIA", "IXC", "-", "-", "-", "-", "-"],
      "Thu": ["-", "-", "-", "-", "-", "-", "-", "-"],
      "Fri": ["-", "-", "-", "-", "-", "-", "-", "XID"],
      "Sat": ["-", "IXB", "-", "-", "-", "-", "-", "CLA"]
    }
  },
  {
    "id": 37,
    "name": "MRS. REKHA KUMARI",
    "class_sections": ["IXD", "IXA", "VIIID", "VIC", "VIIIA", "XA", "VIID", "VID", "XD", "VIII B", "VIIA", "IXB", "IXC", "VIB", "VIIIC", "VIIB", "VIIC", "VIA", "XC", "XB", "CLA"],
    "points": 0,
    "preference": "",
    "timetable": {
      "Mon": ["IXD", "-", "-", "XA", "IXB", "-", "VIIIC", "VIA"],
      "Tue": ["-", "VIIID", "-", "VID", "IXC", "-", "VIIB", "XC"],
      "Wed": ["-", "IXA", "-", "VIID", "-", "VIIA", "VIIIC", "VIIC"],
      "Thu": ["-", "VIC", "-", "XD", "-", "-", "VIIIB", "VIIC"],
      "Fri": ["-", "VIIID", "-", "VIII B", "-", "-", "VIIIB", "VIB"],
      "Sat": ["-", "VIIIA", "-", "-", "VIB", "-", "VIID", "CLA"]
    }
  },
  {
    "id": 38,
    "name": "MR. PRAMOD RAJAK",
    "class_sections": ["IXA", "VIC", "VIIIA", "VIIC", "VID", "IXB", "VIIB", "VIB", "IXC", "VIIIC", "VIIID", "VIIIB", "VIIA", "VIA", "IXD", "XD", "XB", "XC", "CLA"],
    "points": 0,
    "preference": "",
    "timetable": {
      "Mon": ["VIC", "IXB", "VIIIA", "-", "VIIIC", "-", "VIIIB", "VIB"],
      "Tue": ["IXA", "VIIB", "VIIIA", "-", "VIIIC", "-", "VIIIB", "-"],
      "Wed": ["-", "-", "VIIIA", "VID", "VIIIC", "-", "VIIA", "-"],
      "Thu": ["-", "-", "VIIIA", "VIIIC", "VIIC", "-", "VIIA", "VIIID"],
      "Fri": ["-", "IXC", "VIIC", "-", "VIIC", "-", "-", "VIIB"],
      "Sat": ["VID", "IXD", "-", "-", "VIC", "VIA", "-", "CLA"]
    }
  },
  {
    "id": 39,
    "name": "Azad Ravi Shekhar",
    "class_sections": ["VIIIA", "VIA", "IX A", "IXC", "XA", "XC", "VIIIC", "VIIA", "VIIIC-VE", "VID"],
    "points": 0,
    "preference": "",
    "timetable": {
      "Mon": ["VIIIA", "IXC", "XA", "XC", "IX A", "-", "VIIA", "VIA"],
      "Tue": ["VIIIA", "IXC", "XA", "-", "-", "-", "VIIA", "VID"],
      "Wed": ["-", "-", "XA", "IXC", "-", "-", "VIIIC-VE", "XC"],
      "Thu": ["-", "-", "-", "-", "-", "-", "IXA", "-"],
      "Fri": ["VIA", "XA", "-", "VIIIC", "-", "-", "VIIC", "VIIIA"],
      "Sat": ["-", "XA", "-", "VIIIC", "-", "-", "VIIC", "-"]
    }
  },
  {
    "id": 40,
    "name": "Prem Lata Kumari",
    "class_sections": ["VIIID", "IX D", "VIC", "VIB", "VIIIB", "XD", "IXB", "XB", "VIID", "VIIB"],
    "points": 0,
    "preference": "",
    "timetable": {
      "Mon": ["-", "VIIID", "-", "-", "-", "-", "VIID", "XD"],
      "Tue": ["-", "IX D", "-", "-", "IXB", "-", "VIID", "XD"],
      "Wed": ["-", "VIC", "VIB", "-", "IXB", "-", "-", "VIIB"],
      "Thu": ["-", "-", "-", "-", "IXB", "-", "IXD", "VIB"],
      "Fri": ["-", "XD", "-", "XD", "XB", "-", "-", "VIIIB"],
      "Sat": ["-", "-", "-", "VIIIB", "XB", "-", "-", "-"]
    }
  },
  {
    "id": 41,
    "name": "MR. MANOJ SHRIVASTAV",
    "class_sections": ["XIA", "XID", "IXD", "VIC", "XIIB", "XIB", "IXB", "VIB", "XB", "XIC", "XIIC", "VID", "XIIA", "XA", "XIID", "CLA"],
    "points": 0,
    "preference": "",
    "timetable": {
      "Mon": ["XIA", "XIIB", "-", "-", "XB", "XIB", "XIIC", "XA"],
      "Tue": ["XIA", "XIB", "-", "-", "XB", "-", "XIIA", "XIIB"],
      "Wed": ["-", "XID", "-", "-", "XIC", "-", "XIIA", "-"],
      "Thu": ["-", "IXD", "XID", "-", "XIC", "-", "XIIA", "XIID"],
      "Fri": ["-", "IXD", "XIC", "-", "XIC", "-", "XIIA", "XIIC"],
      "Sat": ["VIC", "VIB", "IXB", "-", "-", "-", "XIIC", "CLA"]
    }
  },
  {
    "id": 42,
    "name": "Mrs. Soni",
    "class_sections": ["VIA-G", "VIID", "VIA", "VIIIA", "IXD", "VIB-G", "VIIIB-GAME", "VIIA", "XB", "VIIC", "VIIB GAME", "VIIIC", "VID", "VII B G", "XIIC", "XIC", "VIC", "XIIA", "XC", "XD", "VIIIB", "XA", "XIID", "VIB", "IXC", "IXB"],
    "points": 0,
    "preference": "",
    "timetable": {
      "Mon": ["-", "VIA-G", "-", "VIB-G", "-", "VIIB GAME", "VII B G", "XC"],
      "Tue": ["-", "VIA-G", "-", "VIB-G", "-", "VIIB GAME", "XIIC", "VIIA"],
      "Wed": ["-", "VIID", "-", "VIIIB-GAME", "-", "VIIB GAME", "-", "XD"],
      "Thu": ["-", "VIA", "-", "VIIIB-GAME", "XB", "VIID", "XIC", "VIIIB"],
      "Fri": ["-", "VIIIA", "VIIA", "-", "VIIC", "VIIIC", "VIC", "XA"],
      "Sat": ["-", "IXD", "-", "VIA-G", "-", "VID", "XIIA", "-"]
    }
  },
  {
    "id": 43,
    "name": "Deepa Sinha",
    "class_sections": ["VIID", "VIIID", "VIC", "IXA", "XIB", "IXC", "IXB", "XB", "XC", "XD", "VIIIC", "XIA", "VIIIB", "XIID", "VIIA", "XID", "IXD"],
    "points": 0,
    "preference": "",
    "timetable": {
      "Mon": ["-", "XIB", "IXC", "XD", "-", "VIIIA", "XIA", "XID"],
      "Tue": ["VIID", "IXA", "IXC", "-", "XD", "VIIIA", "XIA", "IXD"],
      "Wed": ["VIID", "IXA", "XB", "-", "XD", "VIIIA", "VIIA", "-"],
      "Thu": ["VIIID", "-", "XC", "-", "-", "-", "-", "VIIIC"],
      "Fri": ["VIIID", "IXB", "XC", "-", "-", "VIIIB", "-", "VIIIC"],
      "Sat": ["VIC", "IXA", "XC", "-", "VIIIC", "XIID", "-", "-"]
    }
  },
  {
    "id": 44,
    "name": "ART-COACH",
    "class_sections": ["VIB", "IXA", "VIIC", "VIA", "VIIID", "IXB", "VID", "XA", "IXC", "VIIIC", "VIC", "VIID", "IXD", "VIIB", "XD", "VIIIB", "XB", "XC", "VIIIA", "VIIA"],
    "points": 0,
    "preference": "",
    "timetable": {
      "Mon": ["-", "IXA", "VIIC", "VIB", "VID", "VIC", "IXD", "VIIIA"],
      "Tue": ["-", "-", "VIIC", "IXB", "-", "-", "VIC", "VIIIA"],
      "Wed": ["-", "-", "-", "-", "VIIIC", "VIA", "-", "VIIIB"],
      "Thu": ["VIB", "VIIC", "VID", "XA", "VIIIC", "-", "VIID", "VIIIB"],
      "Fri": ["-", "VIA", "-", "VIB", "-", "VIID", "VIIB", "VIIA"],
      "Sat": ["-", "IXC", "-", "-", "-", "-", "-", "VIIA"]
    }
  }
];
