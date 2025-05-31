 // === JAVASCRIPT PARA FUNCIONALIDADES === 
        
        // Variável global para armazenar o horário selecionado
        let selectedTime = null;
        
        /**
         * Função para selecionar um horário
         * @param {string} time - O horário selecionado (ex: "09:00")
         */
        
        
        /**
         * Função para inicializar eventos da página
         */
        function initializeApp() {
            console.log('Aplicativo de agendamento inicializado');
            
            // Adiciona listeners para as abas
            const tabTriggers = document.querySelectorAll('[data-bs-toggle="tab"]');
            tabTriggers.forEach(trigger => {
                trigger.addEventListener('shown.bs.tab', function (event) {
                    console.log(`Aba ativa: ${event.target.getAttribute('data-bs-target')}`);
                });
            });
            
            // Reset da seleção de horário quando muda de aba
            const servicosTab = document.getElementById('servicos-tab');
            servicosTab.addEventListener('shown.bs.tab', function() {
                // Reset seleção de horário
                selectedTime = null;
                document.querySelectorAll('.btn-time').forEach(btn => {
                    btn.classList.remove('selected');
                });
                document.getElementById('timeAlert').style.display = 'none';
            });
        }
        
        
        // === NOVA FUNÇÃO PARA SERVIÇOS ===
        let selectedService = null;

        function selectService(serviceName) {
            document.querySelectorAll('.btn-time').forEach(btn => {
                btn.classList.remove('selected');
            });

            event.target.classList.add('selected');
            selectedService = serviceName;

            const timeAlert = document.getElementById('timeAlert');
            const selectedTimeText = document.getElementById('selectedTimeText');

            selectedTimeText.textContent = serviceName;
            timeAlert.style.display = 'block';
            timeAlert.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }

        function bookAppointment() {
            if (selectedService) {
                alert(`Redirecionando para agendamento do serviço: ${selectedService}`);
                // window.location.href = `agendamento.html?servico=${encodeURIComponent(selectedService)}`;
            } else {
                alert('Por favor, selecione um serviço primeiro.');
            }
        }


// Inicializa o aplicativo quando a página carrega
        document.addEventListener('DOMContentLoaded', initializeApp);
        
        /**
         * Função para simular navegação entre páginas/seções
         * @param {string} section - Seção para navegar
         */
        function navigateTo(section) {
            const tabButton = document.querySelector(`#${section}-tab`);
            if (tabButton) {
                const tab = new bootstrap.Tab(tabButton);
                tab.show();
            }
        }
        
        /**
         * Funções auxiliares para interações da interface
         */
        
    
        
        // Adiciona animação suave ao scroll para dispositivos móveis
        if (window.innerWidth <= 768) {
            const style = document.createElement('style');
            style.textContent = `
                html {
                    scroll-behavior: smooth;
                }
            `;
            document.head.appendChild(style);
        }