﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DapperApi.Entities
{
    public class Login
    {
        public int EmployeeId { get; set; }
        public string Username { get; set; }

        public string Password { get; set; }

        
    }
}
